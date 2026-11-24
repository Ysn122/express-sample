const app = require('express')();
app.get('/', (req, res) => res.send('Hello from my platform!'));
app.listen(process.env.PORT || 3000);
