import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 滚动触发动画示例
export const initScrollDemo = () => {
  // 为每个滚动元素创建动画
  gsap.utils.toArray('.scroll-item').forEach((item, i) => {
    gsap.set(item, { opacity: 0, x: -50 });
    
    ScrollTrigger.create({
      trigger: item,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      onEnter: () => {
        gsap.to(item, {
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: "power3.out",
          delay: i * 0.1
        });
      },
      onLeave: () => {
        gsap.to(item, {
          duration: 0.8,
          opacity: 0.5,
          x: -20,
          ease: "power3.in"
        });
      },
      onEnterBack: () => {
        gsap.to(item, {
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: "power3.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(item, {
          duration: 0.8,
          opacity: 0.5,
          x: -20,
          ease: "power3.in"
        });
      },
      markers: true, // 开发时可见的标记，发布时应移除
    });
  });
}; 