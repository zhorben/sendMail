const defer = require('config/defer').deferConfig;
const path = require('path');
require('dotenv').config()

module.exports = {
  server: {
    siteHost: process.env.SITE_HOST
  },
  mailer: {
    transport: process.env.MAIL_TRANSPORT,
    gmail: {
      user: process.env.MAIL_USER,
      password: process.env.MAIL_PASSWORD
    },
    senders:  {
      // transactional emails, register/forgot pass etc
      default:  {
        fromEmail: process.env.MAIL_FROM,
        fromName:  process.env.MAIL_FROM_NAME,
        signature: process.env.MAIL_SIGNATURE
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
    uri:     process.env.MAIL_SIGNATURE.MONGOOSE_URI,
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
