const urlsToRedirect = require('../redirectsMap');

function handleRedirects(request, response, next) {
  if (urlsToRedirect[request.path]) {
    console.log('url to redirect has a value');
    response.redirect(302, urlsToRedirect[request.path]);
  } else if (request.path !== '/home_page') {
    console.log('url requested is not home_page');
    response.redirect(302, '/home_page');
  } else {
    next();
  }
};

module.exports = { handleRedirects };
