import { Request, Response } from 'express';
import { IDtoEntityStructure } from '../../modules/user/infrastructure/http/dto/structure/dto.entity.structure';

export function dtoValidator(dtoEntity: IDtoEntityStructure | any, status: 'BODY' | 'PARAMS') {
  return async function (req: Request, res: Response, next) {
    try {
      let dto;
      let error;

      switch (status) {
        case 'BODY':
          dto = new dtoEntity({ ...req.body });
          error = await dto.isValid();
          break;
        case 'PARAMS':
          dto = new dtoEntity({ ...req.params });
          error = await dto.isValid();
          break;
      }

      if (error === undefined) {
        next();
      }
    } catch (bodyReceivedNotCompatible) {
      return res.status(400).json(bodyReceivedNotCompatible);
    }
  };
}
