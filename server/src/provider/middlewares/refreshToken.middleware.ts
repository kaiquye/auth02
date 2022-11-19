import { JwtToken } from '../../utils/helpers/token/jwt.token';

class RefreshTokenMiddleware {
  validate(req, res, next) {
    const authorization = req.cookies?.['refresh-token'];

    console.log(authorization);

    if (!authorization) {
      return res.status(401).json({ success: false, message: 'refresh token not informed' });
    }

    const refreshToken = authorization.split(' ')[1];

    if (!refreshToken) {
      return res.status(401).json({ success: false, message: 'refresh token was not informed correctly' });
    }

    try {
      const payload: any = new JwtToken().validateRefreshToken(refreshToken);
      req.user_infos = payload.email;
      next();
    } catch (invalidRefreshToken) {
      return res.status(401).json({ success: false, message: 'refresh token was not informed correctly' });
    }
  }
}

export default new RefreshTokenMiddleware().validate;
