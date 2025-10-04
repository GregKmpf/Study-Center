//relação com o banco de dados 

import { Tag } from './Tag';

import { //importa classes especificas do typeorm como modificadores
    Entity,
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    ManyToMany, 
    JoinTable 
} from 'typeorm';

@Entity() // diz ao TypeORM que esta classe representa a tabela 'note' no banco
export class Note {
    @PrimaryGeneratedColumn() //cria uma coluna
    id!: number;

    @Column({ length: 255}) // cria uma coluna
    title!: string;

    @Column('text') // cria uma culuna
    content!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;

    //Relação Many To many, uma note pode ter várias tags
    @ManyToMany(() => Tag, (tag) => tag.notes)
    @JoinTable() //oque cria uma tabela intermediaria

    tags!: Tag[];

}