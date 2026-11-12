# 王昊的个人主页

这是王昊的个人主页，面向模型应用测试开发、推理系统、视觉算法和可复现的 AI 工具。页面以固定的 Three.js CRT 舞台承载首页、开源项目、About 和 Contact 四个区段。

[访问主页](https://redheartsecretman.top/) · [查看 GitHub](https://github.com/RedHeartSecretMan) · [查看简历](https://me.redheartsecretman.top/)

![主页首屏预览](docs/preview.jpg)

## 快速开始

页面不需要构建工具。进入仓库后运行：

```bash
python3 -m http.server 4173
```

然后打开 <http://localhost:4173/>。需要查看完整 Three.js CRT 场景时，请使用 HTTP 预览，不要直接打开 `file://` 文件。

## 页面能力

- 顶部导航固定显示，并通过当前区段高亮和悬停反馈引导浏览。
- Work 展示 `vllm-oxide`、`dag-skill`、`a-share-research-skill` 和 `any-translate` 四个公开项目。
- Work 支持鼠标拖拽、触摸滑动、触控板横向滚动和键盘左右方向键；项目链接会随当前卡片同步更新。
- 页面支持中英文切换，Résumé 入口统一指向 <https://me.redheartsecretman.top/>。
- CRT 屏幕使用原模型曲面玻璃材质显示首页和项目双语信号，响应指针与滚动，不自动随机旋转。
- 舞台使用星云背景、星尘、暖色屏幕光和冷色轮廓光；`prefers-reduced-motion` 开启时会降低动态效果。

## 资产与实现

- `assets/television_02/`：Poly Haven Television 02 的 CC0 glTF、二进制缓冲和 1K 纹理。
- `crt-display.mjs`：将屏幕纹理映射到原始模型的曲面玻璃三角形，不创建悬浮覆盖屏。
- `vendor/`：Three.js r169、GLTFLoader 及其依赖和许可证文件。
- `docs/preview.jpg`：当前主页首屏的 README 预览图。
- `docs/research/shader.md`：参考站点结构、资产来源和本地实现映射。

## 验证

```bash
node --test tests/*.test.mjs
node --check redirect.js
git diff --check
```

测试覆盖原始曲面玻璃几何、UV 方向、屏幕边界、项目轮播、拖拽切换、双语切换、链接目标和分割线约束。
