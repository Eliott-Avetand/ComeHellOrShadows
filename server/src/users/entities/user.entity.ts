import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { ROLES } from '../roles/roles.enum';
import { Badge } from 'src/badge/entities/badge.entity';
import { OptIn } from 'src/opt_in/entities/opt_in.entity';
import { ReadingPreference } from 'src/reading_preferences/entities/reading_preference.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ default: 'aze' })
  username: string;

  @Column()
  email: string;

  @Column({ default: '' })
  biography: string;

  @Column({ default: '' })
  avatar_path: string;

  @Column({ default: '' })
  banner_path: string;

  @Column({ type: 'enum', enum: ROLES, default: ROLES.User })
  role: ROLES;

  @OneToOne(() => OptIn, (opt_in) => opt_in.user)
  @JoinColumn({ name: 'opt_in_id' })
  opt_in: OptIn;

  @OneToOne(
    () => ReadingPreference,
    (reading_preferences) => reading_preferences.user,
  )
  @JoinColumn({ name: 'reading_preferences_id' })
  reading_preferences: ReadingPreference;

  @ManyToMany(() => Badge, (badge) => badge.users)
  badges: Badge[];

  @Column()
  @Exclude()
  password: string;
}
