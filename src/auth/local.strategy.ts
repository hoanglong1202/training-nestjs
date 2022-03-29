import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(`username: ${username} password: ${password}`);
    const result = await this.authService.validateUser(username, password);
    if (!result) {
      throw new UnauthorizedException();
    }

    return result;
  }
}
