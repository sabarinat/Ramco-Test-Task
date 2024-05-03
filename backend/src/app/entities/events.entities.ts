import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { DateEntity } from "./date.entities";
@Entity()
export class Events extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  event: string;

  @Column()
  component: string;

  @Column()
  time: Date;

}
