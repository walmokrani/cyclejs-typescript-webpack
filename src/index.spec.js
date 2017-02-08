const context = require.context('./app', true, /\.(js|ts)$/);
context.keys().forEach(context);
