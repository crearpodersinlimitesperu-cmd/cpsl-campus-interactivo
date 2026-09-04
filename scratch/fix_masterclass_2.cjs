const fs = require('fs');
const path = require('path');

const file = path.join('c:', 'Users', 'josem', 'Downloads', 'cpsl-campus-interactivo', 'src', 'pages', 'MasterclassDistinciones.jsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/` \}\}\} \/>/g, '` }} />');

fs.writeFileSync(file, content, 'utf8');
console.log("Fix 2 aplicado");
