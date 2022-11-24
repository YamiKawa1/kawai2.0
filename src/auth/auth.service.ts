import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    login = async(req, res) =>{
        try {
            const {
                email,
                password
            } = req.body;
        
            if (!email || !password) return generalMessage(res, 400, 'Campos imcompletos')
            
    
            const user = await User.findOne({email: email});
    
            if (!user) {
                return generalMessage(res, 404, 'Email no encontrado');
            } else {
                const isPassword = await User.comparePassword(password, user.password)
        
                if (!isPassword) {
                    return generalMessage(res, 400, 'La contrasena es incorrecta')
                }
            }
            const token = jwt.sign({
                id: user._id,
                fullname: user.fullname, 
                roleId: user.roleId,
            }, process.env.JWTSECRET , {
                expiresIn: 86400 //24h
            });
    
            return generalMessage(res, 200, 'Usuario Logeado', token);
            
        } catch (error) {
            return afterCatchMessage(res, 'login Controller', error);
    
        }
       
    }
    
}
