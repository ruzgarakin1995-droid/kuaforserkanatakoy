const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = walkSync(dirFile, filelist);
    } catch (err) {
      if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src')).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Name
  content = content.replace(/LaVille Güzellik Salonu/g, 'Kuaför Serkan Ataköy');
  content = content.replace(/LaVille Güzellik/g, 'Kuaför Serkan Ataköy');
  content = content.replace(/LaVille/g, 'Kuaför Serkan Ataköy');
  content = content.replace(/La Ville/g, 'Kuaför Serkan Ataköy');
  content = content.replace(/lavilleguzelliksalonu@gmail\.com/g, 'info@kuaforserkanatakoy.com');
  content = content.replace(/@laville\.beauty/g, '@kuafor.serkanatakoy');
  
  // Address
  content = content.replace(/Abide-i Hürriyet Cd no:51, 34360\s*<br\/>\s*Şişli\/İstanbul/g, 'Ataköy 7-8. Kısım Mah. Defne Sok. Martı Sitesi 3. Blok No:17<br/>Bakırköy, Istanbul, Turkey');
  content = content.replace(/Abide-i Hürriyet Cd no:51, 34360/g, 'Ataköy 7-8. Kısım Mah. Defne Sok. Martı Sitesi 3. Blok No:17');
  content = content.replace(/Şişli\/İstanbul/g, 'Bakırköy, Istanbul, Turkey');

  // Phone numbers
  content = content.replace(/0212 555 44 33/g, '0212 560 13 53');
  content = content.replace(/\+90 552 894 55 50/g, '+90 542 102 06 27');
  content = content.replace(/905528945550/g, '905421020627');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
