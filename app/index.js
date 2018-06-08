const component = require('./component');
require('./main.css');

const app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());