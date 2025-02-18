import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('email').isEmail(),
    check('password').isLength({ min: 8, max: 15}),
    check('name').isLength({ min: 1, max: 255}),
    check('lastName').isLength({ min: 1, max: 255}),
    check('phoneNumber').isLength({ min: 1, max: 10})
  ];
     
  
  function validator(req: Request, res: Response, next: NextFunction) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
      }
      next();
  }
  
  


  export default {
    validatorParams,
    validator
};