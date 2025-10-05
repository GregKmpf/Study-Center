import {request, Response} from 'express';
import {AppDataSource} from '../data-source';
import {Note} from '../entity/Note';
import {Tag} from '../entity/Tag';

/* 

 Aqui utilizarei o express para lidar com as requisições 
 definindo as manipipulações do server
 controller para salvar as notas

*/




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

    //encontra as tags existentes ou cria a nova se não existentes

    const noteTags = await Promise.all(
        tags.map(async (tagName: string) => {
            const existingTag = await tagRepository.findOne({where: { name: tagName}});
            if(existingTag){
                return existingTag;

            }
            else{
                const newTag = tagRepository.create({ name: tagName });
                return await tagRepository.save(newTag);
            }
        })
    )




}
