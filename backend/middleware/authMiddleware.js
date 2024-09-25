const jwt = require('jsonwebtoken');

// Middleware to protect routes based on a single role
const authMiddleware = (role) => {
  return (req, res, next) => {
    const token = req.header('Authorization');// Bearer token

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, 'cvrcoe', (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Failed to authenticate token' });
      }

      // Check if the role matches
      if (decoded.role !== role) {
        return res.status(403).json({ error: 'Access forbidden: insufficient rights' });
      }

      req.userId = decoded.id; // Store user ID for further use
      req.userRole = decoded.role; // Store user role
      next();
    });
  };
};

module.exports = authMiddleware;

