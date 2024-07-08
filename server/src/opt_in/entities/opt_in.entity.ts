import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OptIn {
    @PrimaryGeneratedColumn()
    opt_in_id: number;

    @Column({ type: "bool" })
    newsletter: boolean;

    @Column({ type: "bool" })
    new_chapter: boolean;

    @OneToOne(() => User, (user) => user.opt_in)
    user: User
}
