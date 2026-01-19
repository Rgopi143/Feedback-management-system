const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the event-feedback-system-n15 directory
app.use(express.static(path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15')));

// Default route to serve the main login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15', 'Login page 2.html'));
});

// Catch all handler for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Feedback-management-system-main', 'event-feedback-system-n15', req.path));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
