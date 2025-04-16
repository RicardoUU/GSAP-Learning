// 导入GSAP核心库和插件
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// 注册插件
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// 设置页脚年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 基础动画示例
const basicDemo = () => {
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

// 时间线动画示例
const timelineDemo = () => {
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

// 滚动触发动画示例
const scrollDemo = () => {
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

// 高级动画示例
const advancedDemo = () => {
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

// 路径动画示例
const pathDemo = () => {
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

// 交互式动画控制
const interactiveDemo = () => {
  // 获取控制元素
  const durationSlider = document.getElementById('duration-slider');
  const durationValue = document.getElementById('duration-value');
  const easeSelect = document.getElementById('ease-select');
  const propX = document.getElementById('prop-x');
  const propY = document.getElementById('prop-y');
  const propRotation = document.getElementById('prop-rotation');
  const propScale = document.getElementById('prop-scale');
  const propOpacity = document.getElementById('prop-opacity');
  const playBtn = document.getElementById('play-interactive');
  const resetBtn = document.getElementById('reset-interactive');
  const element = document.getElementById('interactive-element');
  
  // 默认设置
  let duration = 1;
  let ease = "power1.out";
  
  // 更新动画时长显示
  durationSlider.addEventListener('input', () => {
    duration = parseFloat(durationSlider.value);
    durationValue.textContent = duration;
  });
  
  // 更新缓动函数
  easeSelect.addEventListener('change', () => {
    ease = easeSelect.value;
  });
  
  // 重置元素位置和样式
  const resetElement = () => {
    gsap.set(element, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      opacity: 1,
      clearProps: "all"
    });
  };
  
  // 播放动画
  playBtn.addEventListener('click', () => {
    // 先重置
    resetElement();
    
    // 创建动画配置
    const config = {
      duration: duration,
      ease: ease
    };
    
    // 根据复选框添加属性
    if (propX.checked) config.x = 100;
    if (propY.checked) config.y = -50;
    if (propRotation.checked) config.rotation = 360;
    if (propScale.checked) config.scale = 1.5;
    if (propOpacity.checked) config.opacity = 0.5;
    
    // 执行动画
    gsap.to(element, config);
  });
  
  // 重置按钮
  resetBtn.addEventListener('click', resetElement);
};

// 动画示例库
const animationExamples = () => {
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

// 页面加载完成后初始化所有动画
document.addEventListener('DOMContentLoaded', () => {
  const basicTimeline = basicDemo();
  const mainTimeline = timelineDemo();
  const advancedTimeline = advancedDemo();
  const pathTimeline = pathDemo();
  scrollDemo();
  interactiveDemo();
  animationExamples();
  
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