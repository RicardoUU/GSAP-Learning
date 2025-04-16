import { gsap } from "gsap";

// 交互式动画控制
export const initInteractiveDemo = () => {
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