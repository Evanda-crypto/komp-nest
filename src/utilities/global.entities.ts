import { CreateDateColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

export class GlobalEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Timestamp;

    @UpdateDateColumn()
    updated_at: Timestamp;

}