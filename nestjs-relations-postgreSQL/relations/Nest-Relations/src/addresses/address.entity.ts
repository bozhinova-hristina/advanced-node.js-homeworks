import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressLineOne: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @OneToOne(() => User, (user) => user.address) @JoinColumn() user: User;
}
