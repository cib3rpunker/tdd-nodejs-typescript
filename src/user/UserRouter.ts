/* eslint-disable @typescript-eslint/no-misused-promises */
import express/* , { Request, Response, NextFunction } */ from 'express';
import * as UserService from './UserService';
import { check, validationResult } from 'express-validator';
const router = express.Router();

// Promise returned in function argument where a void return was expected. eslint@typescript-eslint/no-misused-promises
router.post(
	'/api/1.0/users',
	check( 'username' ).notEmpty().withMessage('🔴 Please enter a valid username'),
	check( 'email' ).notEmpty().withMessage('🔴 Please enter a valid email'),
	check( 'password' ).notEmpty().withMessage('🔴 Password cannot be empty'),
	async ( req, res, next ) => {
		const errors = validationResult( req )
		if ( !errors.isEmpty() ) {
			const validationErrors = {}
			errors?.array().forEach( ( error ) => ( validationErrors[error.param] = error.msg ) )
			// const response = { validationErrors: { ...req.body.validationErrors } };
			return res.status( 400 ).send( {validationErrors: validationErrors} );
		}

		await UserService.save( req.body );
		return res.send( { message: 'User created' } );
	}
);

export default router;
