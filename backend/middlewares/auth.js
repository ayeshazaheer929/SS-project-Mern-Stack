const jwt = require('jsonwebtoken');

// Authentication middleware
const authenticate = (req, res, next) => {
  try {
    // Extract token from the Authorization header
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Attach the user information to the request object
    req.userData = decoded;
    
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

module.exports = authenticate;
