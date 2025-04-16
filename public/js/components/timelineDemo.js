import { gsap } from "gsap";

// 时间线动画示例
export const initTimelineDemo = () => {
  // 创建GSAP时间线实例
  const tl = gsap.timeline({ paused: true });
  
  // 重置圆形的位置
  gsap.set([".circle"], { clearProps: "all" });
  
  // 添加连续动画
  tl.to("#circle1", { 
    duration: 1, 
    x: 200, 
    ease: "power1.out" 
  })
  .to("#circle2", { 
    duration: 1, 
    x: 200, 
    ease: "power1.out" 
  })
  .to("#circle3", { 
    duration: 1, 
    x: 200, 
    ease: "power1.out" 
  });
  
  // 添加按钮事件监听
  document.getElementById('play-timeline').addEventListener('click', () => {
    tl.play();
  });
  
  document.getElementById('pause-timeline').addEventListener('click', () => {
    tl.pause();
  });
  
  document.getElementById('resume-timeline').addEventListener('click', () => {
    tl.play();
  });
  
  return tl;
}; 