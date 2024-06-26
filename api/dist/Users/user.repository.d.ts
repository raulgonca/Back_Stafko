import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserRepository extends Repository<User> {
    findOneByUsername(username: string): Promise<User | undefined>;
}
