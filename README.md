# GSAP 学习项目

这是一个用于学习GSAP (GreenSock Animation Platform) 动画库的入门项目。

## 项目内容

项目包含了以下GSAP动画示例：

1. **基础动画** - 展示了基本的动画属性如位置、旋转、缩放和颜色变化
2. **时间线动画** - 展示了如何使用GSAP时间线创建连续动画序列
3. **滚动触发动画** - 展示了如何使用ScrollTrigger插件创建滚动触发的动画效果
4. **高级动画** - 展示了GSAP的高级功能，包括SVG形状变换、滤镜效果和文字动画
5. **路径动画** - 展示了如何使用MotionPathPlugin实现沿路径移动的动画
6. **交互式动画控制** - 提供交互式界面，让用户可以调整动画参数并实时查看效果
7. **动画示例库** - 包含常用动画效果的预设示例，可点击查看
8. **学习资源链接** - 提供GSAP学习资源的快速链接

## 如何运行

1. 确保您已安装Node.js和npm
2. 克隆或下载本项目代码
3. 在项目根目录运行以下命令安装依赖：

```bash
npm install
```

4. 启动开发服务器：

```bash
npm run dev
```

5. 在浏览器中打开显示的本地地址（通常是 http://localhost:3000）

## 项目结构

```
gsap-learning/
├── public/              # 公共资源目录
│   ├── index.html       # 主HTML文件
│   ├── css/             # 编译后的CSS文件
│   └── js/              # 编译后的JS文件
├── src/                 # 源代码目录
│   ├── js/              # JavaScript文件
│   │   └── main.js      # 主JS入口文件
│   ├── css/             # 样式文件
│   │   ├── style.css    # 主CSS文件
│   │   ├── base.css     # 基础样式
│   │   ├── responsive.css # 响应式样式
│   │   └── components/  # 组件样式
│   └── components/      # 动画组件模块
│       ├── basicDemo.js # 基础动画组件
│       ├── timelineDemo.js # 时间线动画组件
│       └── ...          # 其他组件
├── scripts/             # 构建脚本
│   └── copyFiles.js     # 文件复制脚本
├── vite.config.js       # Vite配置文件
├── package.json         # 项目配置
└── README.md            # 项目说明
```

## 使用的GSAP插件

- **Core** - GSAP核心库
- **ScrollTrigger** - 用于创建滚动触发动画
- **MotionPathPlugin** - 用于沿路径移动的动画

## GSAP学习资源

- [GSAP官方文档](https://greensock.com/docs/)
- [GSAP示例](https://greensock.com/examples-showcases/)
- [GSAP论坛](https://greensock.com/forums/)

## 许可证

MIT 