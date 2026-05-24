# Team Wear JP Demo

工作服 / 团体服 / T恤定制网站的前端静态首页 Demo。

这是一个面向日本用户的展示型页面，只包含前端页面、静态图片和假数据。不包含后台、登录、支付或数据库。

## 技术栈

- React
- Vite
- TailwindCSS
- lucide-react

## 项目结构

```text
.
├─ public/
│  └─ assets/          # 页面图片素材
├─ src/
│  ├─ App.jsx          # 首页页面和假数据
│  ├─ index.css        # Tailwind 入口和全局样式
│  └─ main.jsx         # React 入口
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## 本地运行

需要先安装 Node.js。建议使用 Node.js 20.19 或更高版本。

安装依赖：

```bash
npm install
```

启动本地开发服务器：

```bash
npm run dev
```

浏览器打开终端里显示的地址，通常是：

```text
http://localhost:5173
```

## 手机预览

1. 电脑和手机连接同一个 Wi-Fi。
2. 在电脑上运行 `npm run dev`。
3. 查看终端里显示的 Network 地址，或使用电脑的局域网 IP。
4. 手机浏览器打开类似下面的地址：

```text
http://你的电脑IP:5173
```

例如：

```text
http://192.168.1.23:5173
```

## 构建

```bash
npm run build
```

构建结果会生成在：

```text
dist/
```

本地预览构建结果：

```bash
npm run preview
```

## 部署到 Vercel

### 方法一：从 GitHub 导入

1. 把项目推送到 GitHub。
2. 登录 Vercel。
3. 点击 `Add New Project`。
4. 选择这个 GitHub 仓库。
5. Vercel 通常会自动识别为 Vite 项目。
6. 保持默认设置即可：

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

7. 点击 `Deploy`。

### 方法二：使用 Vercel CLI

```bash
npm install -g vercel
vercel
```

正式发布：

```bash
vercel --prod
```

## 后续修改位置

- 修改页面内容和商品假数据：`src/App.jsx`
- 修改图片：`public/assets/`
- 修改颜色、字体、布局样式：`src/App.jsx` 和 `tailwind.config.js`
