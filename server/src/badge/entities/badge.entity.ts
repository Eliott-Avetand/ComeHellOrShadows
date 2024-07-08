import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Badge {
    @PrimaryGeneratedColumn()
    badge_id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    icon_path: string;

    @ManyToMany(() => User, (user) => user.badges)
    @JoinTable({
        name: "user_badge",
        joinColumn: { name: "user_id" },
        inverseJoinColumn: { name: "badge_id" }
    })
    users: User[]
}
