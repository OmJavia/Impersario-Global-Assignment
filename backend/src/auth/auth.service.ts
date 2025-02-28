import { Injectable, ConflictException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { RegisterDto, LoginDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<{ token: string }> {
    // ✅ Check if username already exists
    const existingUser = await this.userRepo.findOne({ where: { username: dto.username } });
    if (existingUser) {
      throw new ConflictException('Username already taken');
    }

    // ✅ Hash password before storing
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.userRepo.create({ ...dto, password: hashedPassword });
    await this.userRepo.save(user);

    // ✅ Generate JWT Token
    const token = this.jwtService.sign({ id: user.id });

    return { token };
  }

  async login(dto: LoginDto): Promise<{ token: string }> {
    const user = await this.userRepo.findOne({ where: { username: dto.username } });
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // ✅ Generate JWT Token
    const token = this.jwtService.sign({ id: user.id });

    return { token };
  }

  async getProfile(id: string): Promise<{ id: string; username: string }> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // ✅ Return only necessary fields (not password)
    return { id: user.id, username: user.username };
  }
}
