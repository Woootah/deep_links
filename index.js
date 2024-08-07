const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/flag', (req, res) => {
    res.send('Try Harder!!');
});

app.get('/super_secret_directory', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'flag.txt'));
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running`);
});
