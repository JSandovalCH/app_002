import { createApp } from 'framework7/core';
import routes from '../js/routes';
import App from '../app.f7';

const app001 = createApp(App, { routes });
app001.init();


var app = new Framework7({
  name: 'MyApp', // App name
  theme: 'auto', // Automatic theme detection


  el: '#app', // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,
});