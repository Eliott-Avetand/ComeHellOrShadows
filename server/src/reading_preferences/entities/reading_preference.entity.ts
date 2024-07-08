import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PAGE_DISPLAY, SCROLL_MODE } from "../enums/read_preferences.enum";
import { User } from "src/users/entities/user.entity";

@Entity()
export class ReadingPreference {
    @PrimaryGeneratedColumn()
    reading_preferences_id: number

    @Column({ type: "enum", enum: SCROLL_MODE, default: SCROLL_MODE.infinite })
    scroll_mode: SCROLL_MODE

    @Column({ type: "enum", enum: PAGE_DISPLAY, default: PAGE_DISPLAY.single_page })
    page_display: PAGE_DISPLAY

    @OneToOne(() => User, (user) => user.reading_preferences)
    user: User
}
