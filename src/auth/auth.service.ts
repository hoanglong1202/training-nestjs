import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUser(username);

    if (user && user.password === pass) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: JSON.stringify(user._id) };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
