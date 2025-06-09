# TimeNugget Docs

> 大学生高效利用时间的经验分享文档

## 简介

TimeNugget 是一个专为大学生打造的时间管理和学习经验分享平台，帮助大学生避坑、快速上手大学生活。

## 快速开始

### 环境要求

- [Node.js](https://nodejs.org/) 版本 18 或更高
- npm 包管理器
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

#### 1. Fork 仓库

```bash
# 在 GitHub 上 Fork 项目到你的账户
# 然后克隆到本地
git clone https://github.com/你的用户名/timenugget-docs.git
cd timenugget-docs
```

#### 2. 本地开发环境搭建

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev
```

开发服务器启动后，你可以：

- 在浏览器中访问 `http://localhost:5173` 查看文档
- 修改 Markdown 文件时自动刷新预览
- 实时查看你的修改效果

#### 3. 创建新分支

```bash
git checkout -b feature/你的贡献内容描述
```

#### 4. 编写内容

- 在相应目录下编写或修改 Markdown 文件
- 使用 Markdown 格式编写内容

#### 5. 提交更改

```bash
git add .
git commit -m "feat: 添加xxx内容"
git push origin feature/你的贡献内容描述
```

#### 6. 发起 Pull Request

- 在 GitHub 上发起 PR
- 填写清晰的标题和描述
- 等待项目维护者审核

### 文档编写指南

1. **新增文档页面**
   - 在 `docs/` (对应文档栏目)或在 `SurvivalManual/` (对应求生宝典栏目)目录下创建新的 `.md` 文件或文件夹添加新内容
   > 求生宝典内容可以在现有内容上做修改，因为是AI生成的，只当作参考
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

我们非常欢迎学长学姐们分享宝贵的校园生活经验！

### 🤝 贡献指南

详细的贡献指南请查看：**[CONTRIBUTING.md](CONTRIBUTING.md)**

### 📞 联系方式

- 🔗 [官方QQ群](https://qm.qq.com/q/N80scRlJmi)
- 📧 [timenugget@tupx.xyz](mailto:timenugget@tupx.xyz)
- 💬 [GitHub Issues](https://github.com/TimeNugget/timenugget-docs/issues)

欢迎提交 Pull Request 或 Issue 来完善文档内容。
