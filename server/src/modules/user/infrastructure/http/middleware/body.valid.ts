import { Request, Response } from 'express';
import { IDtoEntityStructure } from '../dto/structure/dto.entity.structure';

export function dtoValidator(dtoEntity: IDtoEntityStructure | any) {
  return async function (req: Request, res: Response, next) {
    try {
      const dto = new dtoEntity({ ...req.body });

      const error = await dto.isValid();

      if (error == undefined) {
        next();
      }
    } catch (bodyReceivedNotCompatible) {
      return res.status(400).json(bodyReceivedNotCompatible);
    }
  };
}
