const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Шлях до React-збірки
const buildPath = path.join(__dirname, '../build');

// Serve static files
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
