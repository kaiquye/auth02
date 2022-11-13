import { Request, Response } from 'express';

export function dtoValidator(dtoEntity) {
  return async function (req: Request, res: Response, next) {
    try {
      const dto = new dtoEntity({ ...req.body });

      const error = await dto.isValid();

      if (error == undefined) {
        next();
      }
    } catch (e) {
      return res.status(400).json(e);
    }
  };
}
