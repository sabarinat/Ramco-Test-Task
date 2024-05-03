import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class DateEntity extends BaseEntity {
  @CreateDateColumn({ type: "datetime", default: () => "CURRENT_TIMESTAMP(6)" })
  createdDate: Date;

  @UpdateDateColumn({
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedDate: Date;
}
