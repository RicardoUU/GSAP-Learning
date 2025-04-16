import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// 路径动画示例
export const initPathDemo = () => {
  // 创建GSAP动画
  const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
  
  // 沿路径运动
  tl.to("#ball", { 
    duration: 4,
    motionPath: {
      path: "#motionPath",
      align: "#motionPath",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    },
    ease: "none"
  });
  
  // 添加按钮事件监听
  document.getElementById('play-path').addEventListener('click', () => {
    tl.play();
  });
  
  document.getElementById('pause-path').addEventListener('click', () => {
    tl.pause();
  });
  
  document.getElementById('progress-path').addEventListener('click', () => {
    tl.progress(0.5);
  });
  
  return tl;
}; 