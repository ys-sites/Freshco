import fs from 'fs';
import path from 'path';

const search = 'Márche';
const replace = 'Marché';

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (
        file === 'node_modules' || 
        file === '.git' || 
        file.endsWith('.jpeg') || 
        file.endsWith('.jpg') || 
        file.endsWith('.png') || 
        file.endsWith('.mp4') ||
        file.startsWith('.')
    ) continue;
    
    const fullPath = path.join(dir, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes(search)) {
        fs.writeFileSync(fullPath, content.replace(new RegExp(search, 'g'), replace), 'utf8');
        console.log(`Replaced in ${fullPath}`);
      }
    }
  }
}

console.log('Starting global text replacement...');
traverse("C:/Users/Sharafath/Desktop/Website/Freshco/Freshco");
console.log('Complete!');
