import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Gender } from '../enums/enum';
import User from 'src/users/entities/user.entity';


@Entity('dogs')
class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar' })
  race: string;

  @Column({ type: 'integer' })
  age: number;

  @Column({ type: 'numeric' })
  weight: number;

  @Column({ type: 'enum', enum: Gender, default: Gender.OTHER }) // Aquí se usa el enum Gender
  gender: Gender;

  @OneToMany(() => User, (user) => user.dog)
    users: User[];
}

export default Dog;