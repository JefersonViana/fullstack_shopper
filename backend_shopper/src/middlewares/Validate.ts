import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class Validate {
  static validateProducts(req: Request, res: Response, next: NextFunction): Response | void {
    if (!req.file) {
      return res.status(mapStatusHTTP("INVALID_DATA")).json({ error: 'Nenhum arquivo enviado.' });
    }
    const resultados: any = [];
    req.file.buffer.toString().split('\n').splice(1).forEach(line => {
      const [productCode, newPrice] = line.split(',');
      const value = Number(newPrice.replace('\r', ''));
      resultados.push({
        productCode: Number(productCode),
        newPrice: isNaN(value) ? 0 : Number(value),
      });
    });
    req.body.products = resultados;
    return next();
  }
}

