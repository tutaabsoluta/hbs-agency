const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars config
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Node.js con Handlebars y Tailwind',
    trips: ["Chill Adventure", "Spooky Times", "Desert Madness", "Out in the wild"]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});