# TimeNugget Docs

> 大学生高效利用时间的经验分享文档

## 简介

TimeNugget 是一个专为大学生打造的时间管理和学习经验分享平台，帮助大学生避坑、快速上手大学生活。

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) 版本 18 或更高
- npm 或 pnpm 包管理器
- Git（用于版本控制）

### 本地开发

**开发环境推荐**：

- **编辑器**：推荐使用 [Visual Studio Code](https://code.visualstudio.com/)
- **推荐 MarkDown 插件**：
  - `Markdown All in One` - 提供 Markdown 语法支持和快捷操作
  - `Markdown Preview Enhanced` - 增强的 Markdown 预览功能
  - `markdownlint` - Markdown 语法检查和格式化
- **开发习惯**：建议对 Markdown 文件进行格式化，保持代码整洁

#### 前提

在开始之前，建议先阅读 [VitePress 官方文档](https://vitepress.dev/zh/)，了解 VitePress 的基本概念和使用方法，这将帮助你更好地理解和修改本项目。

#### 1. 克隆仓库

```bash
git clone https://github.com/TimeNugget/timenugget-docs.git
cd timenugget-docs
```

#### 2. 安装依赖

```bash
# 使用 npm
npm install

# 或使用 pnpm
pnpm install
```

#### 3. 启动开发服务器

```bash
# 启动本地开发服务器，支持热重载
npm run docs:dev
```

开发服务器启动后，你可以：

- 在浏览器中访问 `http://localhost:5173` 查看文档
- 修改 Markdown 文件时自动刷新预览
- 实时查看你的修改效果

#### 4. 提交更改到 GitHub 仓库

修改完成后，将你的更改提交到 GitHub 仓库

### 文档编写指南

1. **新增文档页面**
   - 在 `docs/` 目录下创建新的 `.md` 文件
   - 在 `.vitepress/config.js` 中添加相应的导航和侧边栏配置

2. **Markdown 语法**
   - 支持标准 Markdown 语法
   - 支持 VitePress 扩展功能（如代码高亮、容器等）
   - 可以使用 Vue 组件

3. **图片资源**
   - 建议将图片放在 `public/` 目录下
   - 使用根绝对路径引用：`![alt text](/icon.png)`
   - 放置在 `public` 中的资源将按原样复制到输出目录的根目录中

### 开发提示

1. **配置文件**: 主要配置在 `.vitepress/config.js`
2. **热重载**: 开发模式下支持文件修改自动刷新
3. **代码高亮**: 支持多种编程语言语法高亮
4. **搜索功能**: VitePress 内置全文搜索功能

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态文档生成器
- Markdown - 文档编写

## 贡献

欢迎提交 Pull Request 或 Issue 来完善文档内容。
