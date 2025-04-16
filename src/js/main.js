// 导入GSAP核心库和插件
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// 导入各个动画组件
import { initBasicDemo } from './components/basicDemo.js';
import { initTimelineDemo } from './components/timelineDemo.js';
import { initScrollDemo } from './components/scrollDemo.js';
import { initAdvancedDemo } from './components/advancedDemo.js';
import { initPathDemo } from './components/pathDemo.js';
import { initInteractiveDemo } from './components/interactiveDemo.js';
import { initAnimationExamples } from './components/animationExamples.js';

// 注册插件
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// 设置页脚年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 页面加载完成后初始化所有动画
document.addEventListener('DOMContentLoaded', () => {
  // 初始化各模块
  const basicTimeline = initBasicDemo();
  const mainTimeline = initTimelineDemo();
  const advancedTimeline = initAdvancedDemo();
  const pathTimeline = initPathDemo();
  initScrollDemo();
  initInteractiveDemo();
  initAnimationExamples();
  
  // 页面加载时自动播放一些动画效果
  gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
  gsap.from(".demo-section", { 
    duration: 0.8, 
    opacity: 0, 
    y: 30, 
    stagger: 0.2, 
    ease: "power2.out",
    delay: 0.5
  });
  
  // 添加额外的随机动画
  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      gsap.to(box, { 
        duration: 0.3, 
        scale: 1.1, 
        ease: "power1.out" 
      });
    });
    
    box.addEventListener('mouseleave', () => {
      gsap.to(box, { 
        duration: 0.3, 
        scale: 1, 
        ease: "power1.in" 
      });
    });
  });
}); 