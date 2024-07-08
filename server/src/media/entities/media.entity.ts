import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MEDIA_SCOPE, MEDIA_TYPE } from "../enum/media.enum";

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    media_id: number;

    @Column()
    media_path: string;

    @Column()
    type: MEDIA_TYPE;

    @Column()
    scope: MEDIA_SCOPE;

    @CreateDateColumn()
    created_at: Date;
}
