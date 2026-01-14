const express = require('express');
const bookRoutes = require('./src/presentation/routes/bookRoutes');
const corsMiddleware = require('./src/presentation/middlewares/cors');
const errorHandler = require('./src/presentation/middlewares/errorHandler');

const app = express();

// Middleware
app.use(corsMiddleware);  // ✅ CORS ตอนนี้ใช้ได้
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Error handling
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
