const express = require('express');

const app = express();

const urlsToRedirect = {
  '/winter_gear': '/home_page',
  '/holiday_gifts': '/home_page',
  '/easter_gifts': ''
};

function redirectUrls(request, response, next) {
  if (urlsToRedirect[request.path]) {
    console.log('url to redirect has a value');
    response.redirect(302, urlsToRedirect[request.path]);
  } else if (request.url !== '/home_page') {
    console.log('url requested is not home_page');
    response.redirect(302, '/home_page');
  } else {
    next();
  }
};

app.use(redirectUrls);

app.get('/home_page', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
  console.log('directed to home_page');
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
