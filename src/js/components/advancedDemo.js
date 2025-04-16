import { gsap } from "gsap";

// 高级动画示例
export const initAdvancedDemo = () => {
  // 创建GSAP时间线实例
  const tl = gsap.timeline({ paused: true });
  
  // SVG基本变换动画（代替MorphSVG）
  tl.to("#morphPath", { 
    duration: 1,
    attr: { d: "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" },
    fill: "#9b59b6",
    ease: "power2.inOut"
  })
  
  // 滤镜效果
  .to("#filterBox", { 
    duration: 1,
    filter: "blur(5px) brightness(1.2) contrast(1.5)",
    backgroundColor: "#e74c3c",
    ease: "power1.out"
  }, "<0.3")
  
  // 文字动画
  .to("#textBox", { 
    duration: 0.8,
    onStart: function() {
      document.getElementById('textBox').innerHTML = "打字效果";
    },
    scale: 1.2,
    rotation: 5,
    ease: "elastic.out(1, 0.3)"
  }, "<0.5");
  
  // 添加按钮事件监听
  document.getElementById('play-advanced').addEventListener('click', () => {
    tl.play(0);
  });
  
  document.getElementById('reset-advanced').addEventListener('click', () => {
    tl.reverse();
  });
  
  return tl;
};