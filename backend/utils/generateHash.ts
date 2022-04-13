import crypto from 'crypto'

export const generateHash = (data: string): string => crypto.createHash('md5').update(data).digest('hex')
