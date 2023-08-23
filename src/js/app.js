import Framework7 from 'framework7';
import routes from '/src/js/routes';

// Inicializar la aplicación
const app = new Framework7({
    root: '#app',
    name: 'MyApp',
    theme: 'auto',
    // Otras configuraciones
});

// Agregar rutas
app.views.create('.view-main', {
    routes: routes,
});
