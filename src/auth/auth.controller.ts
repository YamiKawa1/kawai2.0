import { Controller, Post, } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    @Post('login')
    login(): string {
        return 'Is a Valid password';
    }
}
