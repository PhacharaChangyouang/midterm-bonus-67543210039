// backend/src/presentation/middlewares/cors.js
function corsMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // หรือระบุ origin ที่อนุญาต
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
}

module.exports = corsMiddleware;
