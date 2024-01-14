import { GlobalEntity } from "src/utilities/global.entities";
import { Column, Entity } from "typeorm";

@Entity('profiles')
export class Profile extends GlobalEntity {


    @Column({unique:true})
    phone1:string;

    @Column({nullable:true})
    phone2:string;

    @Column()
    address:string;

    @Column({nullable:true})
    github:string;

    @Column({nullable:true})
    facebook:string;

    @Column({nullable:true})
    tiktok:string;

    @Column({nullable:true})
    instagram:string;

    @Column({nullable:true})
    x:string;

    @Column({nullable:true})
    youtube:string;

    @Column({type:"longtext",nullable:true})
    biography:string;

}