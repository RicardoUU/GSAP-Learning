import { gsap } from "gsap";

// 动画示例库
export const initAnimationExamples = () => {
  // 预定义动画
  const animations = {
    fadeIn: { opacity: 0, duration: 1, opacity: 1 },
    fadeOut: { opacity: 1, duration: 1, opacity: 0 },
    zoomIn: { scale: 0, duration: 1, scale: 1, ease: "back.out(1.7)" },
    zoomOut: { scale: 1, duration: 1, scale: 0, ease: "power2.in" },
    slideInLeft: { x: -100, opacity: 0, duration: 1, x: 0, opacity: 1, ease: "power1.out" },
    slideInRight: { x: 100, opacity: 0, duration: 1, x: 0, opacity: 1, ease: "power1.out" },
    bounce: { y: 0, duration: 1, y: -30, ease: "bounce.out" },
    pulse: { scale: 1, duration: 0.5, scale: 1.1, repeat: 1, yoyo: true, ease: "power1.inOut" },
    flip: { rotationY: 0, duration: 1, rotationY: 180, ease: "power2.out" },
    shake: { x: 0, duration: 0.1, x: 10, repeat: 5, yoyo: true, ease: "none" },
    rubberBand: { 
      scaleX: 1, 
      scaleY: 1, 
      duration: 1, 
      scaleX: 1.25, 
      scaleY: 0.75, 
      ease: "power1.out",
      onComplete: function() {
        gsap.to(this.targets(), { duration: 0.4, scaleX: 0.75, scaleY: 1.25, ease: "power1.out",
          onComplete: function() {
            gsap.to(this.targets(), { duration: 0.6, scaleX: 1, scaleY: 1, ease: "elastic.out(1, 0.5)" });
          }
        });
      }
    },
    rotateIn: { rotation: -180, opacity: 0, duration: 1, rotation: 0, opacity: 1, ease: "power2.out" }
  };
  
  // 获取所有示例元素
  const exampleItems = document.querySelectorAll('.example-item');
  
  // 为每个示例添加点击事件
  exampleItems.forEach(item => {
    const animType = item.getAttribute('data-anim');
    
    // 添加点击事件
    item.addEventListener('click', () => {
      // 重置元素
      gsap.set(item, { clearProps: "all" });
      
      // 应用动画
      gsap.to(item, animations[animType]);
    });
  });
}; 