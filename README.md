# redheartsecretman-landing

王昊 Wang Hao 的个人网站入口：<https://redheartsecretman.top/>。

目前自动跳转到 [3D 简历与作品集](https://me.redheartsecretman.top/)，同时提供简洁的备用页面和手动入口。页面使用本地字体，无第三方脚本、追踪或前端依赖。

## 两个仓库的分工

| 仓库 | 访问地址 | 维护内容 | 发布方式 |
| --- | --- | --- | --- |
| [redheartsecretman-landing](https://github.com/RedHeartSecretMan/redheartsecretman-landing) | `redheartsecretman.top` | 根域名入口；以后可改为独立首页 | GitHub Pages，从 `main` 的根目录直接发布 |
| [redheartsecretman-resume](https://github.com/RedHeartSecretMan/redheartsecretman-resume) | `me.redheartsecretman.top` | 3D 场景、简历、作品集 | 推送 `main` 后由 GitHub Actions 构建 `web/` 并发布 |

两个站点分别绑定自定义域名。仓库改名后保持域名设置不变，访问地址无需随仓库名变化。

## 文件与行为

- `index.html`：页面文案、简历入口、canonical 和分享信息。
- `styles.css`、`favicon.svg`：移动端适配、键盘焦点和视觉样式。
- `redirect.js`：立即跳转，保留查询参数与锚点，并使用 `location.replace` 避免返回键反复进入跳转页。目标固定为页面中的简历链接，不从 URL 参数接收跳转地址。
- 禁用 JavaScript 时，`noscript` 中的 `meta refresh` 跳转到简历首页；这种情况下无法动态携带查询参数与锚点。脚本加载失败时，页面上的手动入口仍可使用。
- `CNAME`：根域名 `redheartsecretman.top`。Pages 来源保持 **Deploy from a branch → main → /(root)**，并启用 **Enforce HTTPS**。
- `.nojekyll`：直接发布静态文件。

目前根域名页面设置 `noindex,follow`，canonical 指向简历，避免将跳转页作为独立内容收录。

## 本地检查

运行跳转行为检查（Node.js 20+，无需安装依赖）：

```bash
node --test tests/redirect.test.mjs
```

本地预览可使用静态服务器，例如 `python3 -m http.server 4180 --bind 127.0.0.1`。正常打开会立即跳转；检查备用页面时，在浏览器开发工具中阻止 `redirect.js` 请求后刷新。

推送到 `main` 后，在仓库 **Actions** 中确认 `pages build and deployment` 成功，再核对根域名跳转、携带参数与锚点的跳转以及移动端布局。

## 以后改为独立首页

1. 替换入口文案与布局，保留指向 `https://me.redheartsecretman.top/` 的简历链接。
2. 移除 `redirect.js` 引用和 `noscript` 中的自动跳转；更新相应测试。
3. 将 canonical 和 `og:url` 改为根域名，并移除 `noindex`。
4. 保持 `CNAME` 与 Pages 域名设置，照常推送 `main` 发布。

修改跳转目标时，应同步更新简历链接、`noscript`、canonical、分享信息和测试预期。
