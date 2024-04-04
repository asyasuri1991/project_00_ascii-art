// console.log('Hello');

const art = require('ascii-art');

art.font("My Super Backend App", 'Doom', (err,renderedText) => {
  if (err) {
    return;
  }
  console.log(renderedText);
})