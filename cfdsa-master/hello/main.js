const { join } = require('path')
const express = require('express')
let ready = false;

const APP_PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

const app = express();

app.get('/health', (req, resp) => {
	resp.status(ready? 200: 400).type('text/plain').end(`${new Date()}: OK`);
});

app.use(express.static(join(__dirname, 'public')));

app.listen(APP_PORT, () => {
	console.log('Application started on port %d at %s', APP_PORT, (new Date()).toString());
});
