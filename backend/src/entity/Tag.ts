import { Entity, PrimaryColumn, Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import {Note} from './Note'

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    //relação many to many
    //uma tag pode ter várias notas

    @ManyToMany(() => Note, (note) => note.tags)
    notes?: Note[];
}