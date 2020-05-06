const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(req, res, next) {
    //Get token from header
    const token = req.header('x-auth-token');

    //Check if not the token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied!' });
    }

    //Validate token
    try {
        await jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
            if(error) {
                res.status(401).json({ msg: 'Token is not valid' });
            } else {
                req.user = decoded.user;
                next();
            }
        })
    } catch (err) {
        console.error('Something wrong with middleware');
        res.status(500).send('Server Error!');
    }
}