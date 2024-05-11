import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Role from "./role.entity";
import Dog from "src/dogs/entities/dog.entity";
import { ApiProperty } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt';

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id:number;

    @Column({type: 'varchar', length: 255})
    @ApiProperty({
        description:'Nombre del usuario',
        example:'Jorge'
})
    name: string;

    @Column({type: 'varchar', length: 255, default:''})
    @ApiProperty()
    lastname: string;

    @Column({type: 'varchar'})
    @ApiProperty()
    email: string;

    @Column({type: 'varchar', nullable: true})
    address?: string;

    @ManyToOne(() => Role, (role) => role.users)
    role: Role;
    //agregar el to many en perros y gente
    @ManyToOne(() => Dog, (dogs) => dogs.users)
    dog: Dog;

    @Column({type: 'varchar', default:''})
    password: string;

    @BeforeInsert()
    async hashPassword() {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(this.password, saltOrRounds);
        this.password = hash;
    }

}

export default User;