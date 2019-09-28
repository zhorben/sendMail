const sendMail = require('./libs/sendMail');
const mongoose = require('./libs/mongoose');

(async function () {

  let letter = await sendMail({
    template:     'hello',
    subject:      'Привет',
    // to doesn't work with gmail, google always rewrite this value
    to:           'arthurzherko@gmail.com',
    name:         'Arthur'
  });

  console.log(letter);

  mongoose.disconnect();

})().catch(console.error);
