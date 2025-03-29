const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.json({ message: 'Backend API is running' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});