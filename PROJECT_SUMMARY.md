# 领诊服 LeadClinic 项目总结

## 项目概述

**领诊服 LeadClinic**是一个为海外患者提供上海三甲医院就医导诊服务的网站。常驻上海静安区，覆盖华山、中山、瑞金、仁济等顶级医疗资源。

- **网站地址**: https://drcnhelp.com
- **GitHub**: https://github.com/shanonzsmithk28-max/LeadClinic
- **技术栈**: Next.js 16 + React 19 + TypeScript + Tailwind CSS + Prisma + SQLite
- **部署平台**: Vercel

---

## 项目结构

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── page.tsx            # 首页 (服务端组件)
│   │   ├── layout.tsx          # 根布局 (服务端组件)
│   │   ├── about/page.tsx      # 关于我们 (客户端组件)
│   │   ├── booking/page.tsx    # 预约页面 (客户端组件)
│   │   ├── services/page.tsx   # 服务介绍 (客户端组件)
│   │   ├── hospitals/page.tsx  # 医院列表 (客户端组件)
│   │   ├── api/booking/route.ts   # API: 提交预约
│   │   └── api/contact/route.ts   # API: 联系我们
│   ├── components/
│   │   ├── navbar.tsx          # 导航栏 (服务端组件)
│   │   └── footer.tsx          # 页脚 (服务端组件)
│   ├── lib/
│   │   ├── config.ts           # 站点配置
│   │   ├── prisma.ts           # Prisma Client 实例
│   │   └── utils.ts            # 工具函数
│   └── app/globals.css         # 全局样式
├── prisma/
│   ├── schema.prisma           # 数据库模型
│   └── migrations/             # 数据库迁移
├── public/                     # 静态资源
├── next.config.ts              # Next.js 配置
├── tailwind.config.js          # Tailwind 配置
├── package.json
└── .env.example                # 环境变量示例
```

---

## 页面说明

| 页面 | 路径 | 类型 | 功能 |
|------|--------|------|------|
| 首页 | `/` | Server Component | 品牌展示、痛点营销、服务概览、医院展示、流程介绍 |
| 服务 | `/services` | Client Component | 6大服务详情、特色列表 |
| 医院 | `/hospitals` | Client Component | 医院搜索、筛选、详情展示 |
| 关于 | `/about` | Client Component | 品牌故事、团队介绍 |
| 预约 | `/booking` | Client Component | 在线表单提交、联系信息 |

---

## 数据库模型

### Booking (预约)
- `id`, `name`, `email`, `phone`, `nationality`
- `hospital`, `department`, `symptom`, `preferredDate`, `notes`
- `status` (默认 pending), `createdAt`

### Contact (联系)
- `id`, `name`, `email`, `message`, `createdAt`

---

## 关键技术决策

### 为什么用 React 19？
- Next.js 16 默认携带 React 19
- React 19 引入了更严格的 HTML 验证

### 为什么用 SQLite + Prisma？
- 足够轻量，无需外部数据库服务器
- Prisma ORM 类型安全
- Vercel 部署时自动生成数据库

### 为什么服务端/客户端组件混用？
- 首页、布局用 Server Component 提升性能和 SEO
- 交互页面用 Client Component 处理状态和事件
- 导航栏用 Server Component 增加首屏渲染速度

---

## 核心配置说明

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // 静态导出时关闭图片优化
  },
};
```

### layout.tsx 关键点
- 移除 `<head>` 标签，改用 `next/script` 的 `Script` 组件
- `<body>` 添加 `suppressHydrationWarning`
- 使用 `next/font` 的替代方案（系统字体）

### 环境变量
```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_GA_ID=""  # GA4 测量 ID，活动北京前设置
```

---

## 运营提示

### 本地开发
```bash
npm install
npx prisma migrate dev
npm run dev
```

### 数据库更新
```bash
npx prisma migrate dev --name <migration-name>
npx prisma generate
```

### 构建部署
```bash
npm run build  # 自动执行 prisma generate
```

### 联系方式更新
修改 `src/lib/config.ts`中的 `SITE_CONFIG`即可更新全站联系方式。

---

## 备注

- 图片使用静态导出，未接入 CDN
- 尚未配置真实 GA4 ID
- 医院信息为示例数据，需实际运营时更新
