```javascript
// next.config.js
module.exports = {
  env: {
    MY_VARIABLE: process.env.MY_VARIABLE,
  },
};
```
This `next.config.js` file enables access to the environment variable `MY_VARIABLE` within the pages directory.  The `env` object allows you to specify the variables you need to make available within your application. Make sure to set the environment variable outside of your code, for example using a `.env` file.