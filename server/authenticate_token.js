import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export default function authenticateToken(req, res, next){
    const token = req.headers['access-token']

    if (!token){
        return res.status(401).json({message: 'Authentication Required'})
    }

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err){
            return res.status(403).json({message: "Invalid or Expired Token"})
        }

        req.user = user;
        next();
    })
}