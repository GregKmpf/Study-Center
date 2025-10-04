import {request, Response} from 'express';
import {AppDataSource} from '../data-source';
import {Note} from '../entity/Note';
import {Tag} from '../entity/Tag';

export const createNote = async (req: Request, res: Response) => { //objetos que representão a requesição e a resposta
    try{
        const {title,content, tags} = req.body; //fazer as variaveis
    }

    //validação basica
    if(!title || !content){
        return res.status(400).json({message: 'Título e conteúdo são obrigatorios'});
    }

    const noteRepository = AppDataSource.getRepository(Note);
    const tagRepository = AppDataSource.getRepository(Tag);





}
