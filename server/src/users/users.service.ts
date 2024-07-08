import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private user: Repository<User>) {}

    create(user: User) {
        return this.user.save(user);
    }

    findAll(): Promise<User[]> {
        return this.user.find();
    }

    findOne(user_id: number): Promise<User | undefined> {
        return this.user.findOneBy({ user_id });
    }

    findByEmail(email: string): Promise<User | undefined> {
        return this.user.findOneBy({ email });
    }

    findByName(username: string): Promise<User | undefined> {
        return this.user.findOneBy({ username });
    }

    update(user_id: number, updateUserDto: UpdateUserDto): Promise<User> {
        return this.user.save({ ...updateUserDto, user_id: user_id });
    }

    remove(id: number) {
        return this.user.delete(id);
    }
}