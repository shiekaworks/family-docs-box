import z from 'zod';

export const loginSchema = z
  .object({
    email: z.string().email().readonly(),
  })
  .required();

export type User = z.infer<typeof loginSchema>;
