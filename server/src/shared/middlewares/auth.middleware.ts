import { JwtToken } from '../../utils/helpers/token/jwt.token';

export class AuthMiddleware {
  validate(req, res, next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ success: false, message: 'token not informed' });
    }

    const Token = authorization.split(' ')[1];

    if (!Token) {
      return res.status(401).json({ success: false, message: 'token was not informed correctly' });
    }

    try {
      const payload: any = new JwtToken().validate(Token);

      req.user_infos = payload.email;

      next();
    } catch (invalidToken) {
      return res.status(401).json({ success: false, message: 'token was not informed correctly' });
    }
  }
}

export default new AuthMiddleware().validate;
