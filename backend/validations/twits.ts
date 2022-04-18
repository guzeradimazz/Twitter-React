import { body } from 'express-validator'

export const twitsValidation = [
    body('text', 'Введите текст твита')
        .isString()
        .isLength({ min: 10, max: 400 })
        .withMessage('Текст недопустимой длинны! (10-400)'),
]
