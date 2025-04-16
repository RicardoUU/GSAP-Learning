const fs = require('fs');
const path = require('path');

// 源目录和目标目录
const srcCssDir = path.join(__dirname, '../src/css');
const destCssDir = path.join(__dirname, '../public/css');
const srcJsDir = path.join(__dirname, '../src/js');
const destJsDir = path.join(__dirname, '../public/js');
const srcComponentsDir = path.join(__dirname, '../src/components');
const destComponentsDir = path.join(__dirname, '../public/js/components');

// 确保目录存在
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 复制文件
function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
  console.log(`复制文件: ${src} -> ${dest}`);
}

// 递归复制目录
function copyDirectory(src, dest) {
  // 确保目标目录存在
  ensureDirectoryExists(dest);

  // 获取源目录中的所有文件和子目录
  const entries = fs.readdirSync(src, { withFileTypes: true });

  // 遍历并复制
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // 如果是目录，递归复制
      copyDirectory(srcPath, destPath);
    } else {
      // 如果是文件，直接复制
      copyFile(srcPath, destPath);
    }
  }
}

// 复制CSS文件
copyDirectory(srcCssDir, destCssDir);

// 复制JS文件
copyDirectory(srcJsDir, destJsDir);

// 复制组件文件
ensureDirectoryExists(destComponentsDir);
const componentFiles = fs.readdirSync(srcComponentsDir);
for (const file of componentFiles) {
  if (file.endsWith('.js')) {
    const srcPath = path.join(srcComponentsDir, file);
    const destPath = path.join(destComponentsDir, file);
    copyFile(srcPath, destPath);
  }
}

console.log('所有文件复制完成！'); 