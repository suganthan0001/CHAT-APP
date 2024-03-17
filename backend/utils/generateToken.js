import jwt from 'jsonwebtoken'

function generateToken(userId,res){
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn:'15d'
    })


    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent attacks cross-site scripting attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "develpoment"
    })
} 

export default generateToken;