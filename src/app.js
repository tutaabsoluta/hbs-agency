const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars config con helper `json`
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {
    json: (context) => JSON.stringify(context)
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Main route


app.get('/', (req, res) => {
  const trips = [
    { id: 1 ,title: "Chill Adventure", description: "Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames. Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis", imgUrl: "/images/chill-adventure.png" },
    { id: 2 ,title: "Spooky Times", description: "Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames. Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis", imgUrl: "/images/spooky-night.jpg" },
    { id: 3 ,title: "Desert Madness", description: "Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames. Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis", imgUrl: "/images/desert-madness.webp" },
    { id: 4 ,title: "Out in the wild", description: "Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat id fringilla arcu condimentum fames. Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum blandit. Feugiat quis quam consectetur lectus id quis tortor vel, mattis", imgUrl: "/images/out-wild.jpg" }
  ];
  
  res.render('home', {
    title: 'Node.js con Handlebars y Tailwind',
    trips: trips // Pasar los objetos completos con título, descripción e imagen
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



