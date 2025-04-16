import { gsap } from "gsap";

// 基础动画示例
export const initBasicDemo = () => {
  // 创建GSAP动画实例
  const tl = gsap.timeline({ paused: true });
  
  // 添加动画序列
  tl.to("#box1", { 
    duration: 1, 
    x: 100, 
    rotation: 360, 
    backgroundColor: "#9b59b6", 
    ease: "power2.inOut" 
  })
  .to("#box2", { 
    duration: 1, 
    y: 50, 
    scale: 1.2, 
    backgroundColor: "#3498db", 
    ease: "back.out(1.7)" 
  }, "<0.2")
  .to("#box3", { 
    duration: 1, 
    x: 100, 
    y: -50, 
    rotation: -180, 
    backgroundColor: "#1abc9c", 
    ease: "elastic.out(1, 0.3)" 
  }, "<0.4");
  
  // 添加按钮事件监听
  document.getElementById('play-basic').addEventListener('click', () => {
    tl.play();
  });
  
  document.getElementById('reverse-basic').addEventListener('click', () => {
    tl.reverse();
  });
  
  return tl;
}; 