const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.authUser = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            'login': false,
            'message': 'unauthenticated!'
        })
    }
}

module.exports = VerifyToken;