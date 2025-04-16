const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 执行构建
console.log('执行项目构建...');
execSync('npm run build', { stdio: 'inherit' });

// 确保docs目录存在
const docsDir = path.join(__dirname, '../docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
} else {
  // 清空docs目录
  fs.readdirSync(docsDir).forEach(file => {
    const filePath = path.join(docsDir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      fs.rmdirSync(filePath, { recursive: true });
    } else {
      fs.unlinkSync(filePath);
    }
  });
}

// 复制dist目录到docs
const distDir = path.join(__dirname, '../dist');
const copyDirectory = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

copyDirectory(distDir, docsDir);
console.log('构建完成，已将文件复制到docs目录，可以推送到GitHub Pages了'); 