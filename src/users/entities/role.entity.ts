import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import User from "./user.entity";

@Entity('role')
class Role{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 255})
    name:string;

    @OneToMany(() => User, (user) => user.role)
    users: User[];
}

export default Role;