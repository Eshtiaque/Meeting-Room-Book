import Jwt from "jsonwebtoken"

const createToken = (jwtPayload: { email: string, role: string }, secret: string, expiresIn: string) => {
    return Jwt.sign(jwtPayload, secret, { expiresIn });
}


export default createToken;