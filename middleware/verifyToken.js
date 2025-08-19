const verifyToken = async(req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        console.log('bearerToken: ', bearerToken);
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
};

export default verifyToken;