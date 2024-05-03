import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { DateEntity } from "./date.entities";
@Entity()
export class ComponentEvent extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  component: string;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column({type: 'tinyint', default: 0})
  isOverall: boolean;
}
