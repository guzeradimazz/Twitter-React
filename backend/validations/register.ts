import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Введите E-mail')
        .isEmail()
        .withMessage('Неверный E-mail!')
        .isLength({ min: 11, max: 40 })
        .withMessage('Почта недопустимой длинны! (11-40)'),
    body('fullname', 'Введите имя')
        .isString()
        .isLength({ min: 2, max: 40 })
        .withMessage('Имя недопустимой длинны! (2-40)'),
    body('username', 'Введите логин')
        .isString()
        .isLength({ min: 2, max: 40 })
        .withMessage('Логин недопустимой длинны! (2-40)'),
    body('password', 'Введите пароль')
        .isString()
        .isLength({ min: 2 })
        .withMessage('Пароль от 2-ух символов!')
        .custom((value, { req }) => {
            if (value != req.body.password2)
                throw new Error('Пароли не совпадают')
            else return value
        }),
]
