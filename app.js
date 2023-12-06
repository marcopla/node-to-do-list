const express = require('express');
const path = require('path');

const checkListRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');

require('./config/database');

const app = express();

app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rootRouter);
app.use('/checklists', checkListRouter);

app.listen(3000, () => {
  console.log('Servidor foi iniciado.');
});
