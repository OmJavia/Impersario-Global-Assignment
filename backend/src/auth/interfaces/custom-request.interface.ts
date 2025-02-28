import { Request } from 'express';

export interface CustomRequest extends Request {
  user: { id: string }; // ✅ Define the `user` property
}
