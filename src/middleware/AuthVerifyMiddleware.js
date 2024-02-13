let jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let Token = req.headers['token'];

        jwt.verify(Token, 'SecretKey123456789', function(err, decoded) {
            if (err) {
                res.status(401).json({ status: 'unauthorized' });
            } else {
                let email = decoded['data'];
                req.headers.email = email;
                next();
            }
        });
    } catch (error) {
        console.error('Error verifying JWT:', error);
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
};


