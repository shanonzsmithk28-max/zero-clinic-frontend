# 领诊服项目 Bug 总结与经验教训

## 本文档目的

记录本项目开发过程中遇到的所有技术问题、根因分析、修复方案，以及如何在未来避免相似问题。

**Time spent on hydration bug**: 数小时
**Root cause**: React 19 对 `<head>` 标签的严格验证
**Lesson**: 永远不要在 `<head>` 里放空白字符

---

## Bug #1: React 19 Hydration Error — 标题级别严重

### 现象
运行 `npm run dev` 后，控制台爆出海量 hydration error：

```
[browser] In HTML, whitespace text nodes cannot be a child of <head>. 
Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.
```

错误堆栈显示问题在 `layout.tsx` 的 `<head>` 部分，根源是 `validateTextNesting` 函数。

### 根因分析

**React 19 引入了更严格的 HTML 验证规则**。在旧版本中，以下代码是可以正常运行的：

```tsx
<head>
  {GA_ID && (
    <>
      <script async src={...} />
      <script dangerouslySetInnerHTML={...} />
    </>
  )}
</head>
```

但在 React 19 中，这段代码会导致以下问题：

1. **`<head>` 标签后的换行**被视为空白文本节点
2. **缩进空白** `{` 前的空格也是文本节点
3. **`<script>` 标签间的换行**同样是文本节点

React 19 的服务端渲染(SSR)和客户端渲染(CSR)在处理这些空白节点时产生不一致，导致 hydration mismatch。

### 修复方案

**方案 A: 彻底修复（采用）**

移除 `<head>` 标签，改用 `next/script` 的 `Script` 组件放在 `<body>` 中：

```tsx
import Script from "next/script";

// 在 layout.tsx 中
<body className="..." suppressHydrationWarning>
  {GA_ID && (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `...` }}
      />
    </>
  )}
  {/* 页面内容 */}
</body>
```

关键点：
- 使用 Next.js 内置的 `Script` 组件而非原生 `<script>`
- `添加 `strategy="afterInteractive"` 控制加载时机
- 给 `<body>` 添加 `suppressHydrationWarning` 作为保险

**方案 B: 如果必须用 `<head>`**

如果确实需要在 `<head>` 中放置内容，必须确保：
```tsx
<head>{/* 不留任何空白，整个内容写在一行 */}
  {condition ? <><script ... /><script ... /></> : null}
</head>
```

### 经验教训

1. **永远不要在 `<head>` 中写多行 JSX**，换行就是空白文本节点
2. **React 19 不是 React 18**，很多"以前能用"的代码模式现在会报错
3. **优先使用 Next.js 内置组件**（`Script`, `Image`, `Link`），它们处理了很多底层复杂性
4. **清除 `.next` 缓存是必要步骤**：`rm -rf .next && npm run dev`

---

## 其他注意事项

### 关于 `suppressHydrationWarning`

这个属性不是"掩耳盗铃"，而是 React 提供的正式解决方案，用于以下场景：
- 字体加载导致的渲染差异
- 第三方脚本动态插入的内容
- 时间/日期格式化的平台差异

### 关于字体加载

本项目没有使用 `next/font`，而是通过 Tailwind 配置系统字体：
```js
fontFamily: {
  sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', ...],
}
```

这避免了 `next/font` 在某些情况下可能导致的 hydration 问题。

### 关于静态导出 vs 动态渲染

当前配置是动态渲染（有 API 和数据库）。如果未来需要静态导出：
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

**注意**: 静态导出时 API routes 不会生效，需要把表单提交改为使用第三方服务（如 Formspree、腾讯云函数）。

---

## 开发工作流检查清单

新建一个页面时，检查以下项目：

- [ ] 是否需要 `"use client"`? (有状态或事件处理才需要)
- [ ] `<head>` 中是否有空白文本节点?
- [ ] 是否使用了 `next/script` 而非原生 `<script>`?
- [ ] 是否清除了 `.next` 缓存测试?
- [ ] 构建时是否有警告或错误?

---

## 排查 Hydration Error 的系统方法

如果遇到 hydration error，按以下步骤排查：

### 第一步: 看报错信息
报错通常会告诉你具体哪个元素不匹配，以及是什么类型的不匹配。

### 第二步: 检查是否涉及以下元素
- `<html>` 属性不一致
- `<body>` 的 className 在客户端被修改
- `<head>` 中有空白或格式化文本
- 使用了 `dangerouslySetInnerHTML`
- 时间相关的内容（`new Date()`, `Math.random()`）

### 第三步: 清除缓存重启
```bash
rm -rf .next
npm run dev
```

### 第四步: 使用 React DevTools
在浏览器中打开 React DevTools，查看组件树中的 ``节点，对比服务端和客户端的渲染结果。

---

## 参考资料

- [React 19 Hydration 文档](https://react.dev/reference/react-dom/client/hydrateRoot)
- [Next.js Script 组件文档](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [Next.js Hydration 问题排查](https://nextjs.org/docs/messages/react-hydration-error)
