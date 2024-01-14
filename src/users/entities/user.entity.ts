import { GlobalEntity } from "src/utilities/global.entities";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { Profile } from "./profile.entity";

@Entity('users')
export class User extends GlobalEntity {

    @Column({unique:true})
    email:string;

    @Column()
    name:string;

    @Column({default:false,type:"tinyint"})
    is_active:number;

    @Column()
    password:string;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
}
