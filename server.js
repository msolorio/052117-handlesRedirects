const express = require('express');

// even though we import the handleRedirects function to this file
// it has access to the urlsToRedirect object within ./middlewares/handleRedirects.js
const { handleRedirects } = require('./middlewares/handleRedirects');

const app = express();

app.use(handleRedirects);

app.get('/home_page', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
  console.log('directed to home_page');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
