const defer = require('config/defer').deferConfig;
const path = require('path');

module.exports = {
  server: {
    siteHost: 'http://localhost'
  },
  mailer: {
    transport: 'gmail',
    gmail: {
      user: 'arthurzherko@gmail.com',
      password: 'asdsdasd'
    },
    senders:  {
      // transactional emails, register/forgot pass etc
      default:  {
        fromEmail: 'arthurzherko@gmail.com',
        fromName:  'Arthur Zherka',
        signature: "<em>С уважением,<br>Arthur</em>"
      },
      /* newsletters example
      informer: {
        fromEmail: 'informer@gmail.com',
        fromName:  'Newsletters',
        signature: "<em>Have fun!</em>"
      }
      */
    }
  },
  mongoose: {
    uri:     'mongodb://localhost/mailer',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  },
  template: {
    // template.root uses config.root
    root: defer(function(cfg) {
      return path.join(cfg.root, 'templates');
    })
  },
  root:     process.cwd()
};
