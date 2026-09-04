const fs = require('fs');
const path = require('path');

const file = path.join('c:', 'Users', 'josem', 'Downloads', 'cpsl-campus-interactivo', 'src', 'pages', 'MasterclassDistinciones.jsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/dangerouslySetInnerHTML=\{ __html: /g, 'dangerouslySetInnerHTML={{ __html: ');
content = content.replace(/` \}/g, '` }}');
content = content.replace(/`\}><\/div>/g, '`}}></div>');
content = content.replace(/`\}\s*><\/div>/g, '`}}></div>');
content = content.replace(/`\}\s*>\s*<\/div>/g, '`}}></div>');
content = content.replace(/`\s*\}/g, '` }}'); // Generic catch for the end

fs.writeFileSync(file, content, 'utf8');
console.log("Fix aplicado");
