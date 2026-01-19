const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the event-feedback-system-n15 directory
app.use(express.static(path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15')));

// Handle favicon requests specifically
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Send no content response for favicon
});

// Default route to serve the main login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15', 'Login page 2.html'));
});

// Catch all handler for any other route
app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15', req.path);
    res.sendFile(filePath, (err) => {
        if (err) {
            // If file not found, serve the main login page
            res.sendFile(path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15', 'Login page 2.html'));
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
