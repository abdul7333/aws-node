const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
