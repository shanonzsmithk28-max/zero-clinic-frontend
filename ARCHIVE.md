# 领诊服 LeadClinic 项目归档

> 归档日期: 2026-04-22
> 项目路径: `/mnt/d/Projects/国际零诊服/frontend`
> 域名: https://drcnhelp.com

---

## 一、项目信息

| 项目 | 内容 |
|------|------|
| 中文名称 | 领诊服 |
| 英文名称 | LeadClinic |
| 域名 | drcnhelp.com |
| 定位 | 为海外患者提供上海三甲医院就医导诊服务 |
| 技术栈 | Next.js 16 + React 19 + TypeScript + Tailwind CSS + Prisma + SQLite |
| 部署平台 | Vercel |

---

## 二、文件结构总览

```
frontend/
├── src/
│   ├── app/                          # Next.js App Router 页面
│   │   ├── page.tsx                  # 首页 - 品牌展示、服务概览、医院展示
│   │   ├── layout.tsx              # 根布局 - SEO元数据、GA脚本、全局结构
│   │   ├── about/page.tsx          # 关于我们 - 品牌故事、团队介绍
│   │   ├── booking/page.tsx        # 预约页面 - 在线表单提交
│   │   ├── services/page.tsx       # 服务介绍 - 6大服务详情
│   │   ├── hospitals/page.tsx      # 医院列表 - 搜索筛选
│   │   ├── api/booking/route.ts    # API - 处理预约表单提交
│   │   └── api/contact/route.ts    # API - 处理联系表单提交
│   ├── components/
│   │   ├── navbar.tsx              # 导航栏 - 品牌Logo、导航链接、移动端菜单
│   │   └── footer.tsx              # 页脚 - 联系信息、链接导航
│   ├── lib/
│   │   ├── config.ts               # 全站配置 - 名称、联系方式、SEO信息
│   │   ├── prisma.ts               # Prisma Client 实例化
│   │   └── utils.ts                # 工具函数 - cn() 等
│   └── app/globals.css             # 全局样式 - Tailwind 导入、自定义样式
├── prisma/
│   ├── schema.prisma               # 数据库模型 - Booking、Contact
│   └── migrations/                 # 数据库迁移记录
├── public/                         # 静态资源
├── next.config.ts                  # Next.js 配置 - 图片静态导出
├── tailwind.config.js              # Tailwind CSS 配置
├── package.json                    # 项目依赖
├── tsconfig.json                   # TypeScript 配置
├── postcss.config.mjs              # PostCSS 配置
├── eslint.config.mjs               # ESLint 配置
├── .env.example                    # 环境变量示例
├── README.md                       # 项目说明
├── PROJECT_SUMMARY.md              # 项目技术总结
├── BUGS_LEARNED.md                 # Bug经验教训
└── ARCHIVE.md                      # 本文档
```

---

## 三、页面与功能说明

| 页面 | 路径 | 组件类型 | 功能 |
|------|--------|----------|------|
| 首页 | `/` | Server Component | 品牌展示、痛点营销、6大服务概览、6家医院展示、4步流程介绍 |
| 服务 | `/services` | Client Component | 每项服务的详细说明和特色列表 |
| 医院 | `/hospitals` | Client Component | 医院卡片展示、按名称/科室搜索筛选 |
| 关于 | `/about` | Client Component | 品牌使命、核心价值观 |
| 预约 | `/booking` | Client Component | 多步骤表单，提交后写入数据库 |

---

## 四、数据库设计

### Booking (预约表)
```prisma
model Booking {
  id            Int      @id @default(autoincrement())
  name          String   // 姓名
  email         String   // 邮箱
  phone         String   // 电话
  nationality   String   // 国籍
  hospital      String?  // 目标医院
  department    String?  // 目标科室
  symptom       String   // 症状描述
  preferredDate String?  // 预约日期
  notes         String?  // 备注
  status        String   @default("pending")  // 状态
  createdAt     DateTime @default(now())
}
```

### Contact (联系表)
```prisma
model Contact {
  id        Int      @id @default(autoincrement())
  name      String
  email     String
  message   String
  createdAt DateTime @default(now())
}
```

---

## 五、核心配置说明

### 环境变量 (.env)
```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_GA_ID=""          # GA4 测量 ID，可选
```

### Next.js 配置
```typescript
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // 静态导出时必须关闭
  },
};
```

### layout.tsx 关键点
- 使用 `Script` 组件而非原生 `<script>`（避免 hydration 错误）
- `<body>` 添加 `suppressHydrationWarning`
- 不使用 `<head>` 标签直接写 JSX

---

## 六、常用操作命令

```bash
# 本地开发
npm install
npx prisma migrate dev
npm run dev

# 数据库更新
npx prisma migrate dev --name <迁移名>
npx prisma generate

# 构建部署
npm run build  # 自动执行 prisma generate
```

---

## 七、后续待办

- [ ] 配置真实 GA4 测量 ID
- [ ] 制作 OG 图片 (`/public/og-image.jpg`)
- [ ] 配置真实联系方式（电话、邮箱、微信）
- [ ] Vercel 生产环境部署
- [ ] 域名 DNS 解析配置
- [ ] 更新医院和医生信息为真实数据

---

## 八、项目历史

| 日期 | 事件 |
|------|------|
| 2026-04-21 | 项目初始化，完成首页、服务、医院、关于、预约页面 |
| 2026-04-21 | 遇到 React 19 hydration 错误，耗时数小时 |
| 2026-04-22 | 修复 hydration 错误，更名：零诊服 → 领诊服，ZeroClinic → LeadClinic |
