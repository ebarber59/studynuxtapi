import { z } from "zod";

export const createLocationSchema = z.object({
  code: z
    .string()
    .trim()
    .min(1, "Code is required")
    .max(10, "Code cannot exceed 10 characters"),

  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),

  isActive: z.boolean().optional().default(true),
});

export const updateLocationSchema = z.object({
  code: z.string().trim().min(1, "Code is required").max(10),

  name: z.string().trim().min(1, "Name is required").max(100),

  isActive: z.boolean(),
});

export type CreateLocationRequest = z.infer<typeof createLocationSchema>;

export type UpdateLocationRequest = z.infer<typeof updateLocationSchema>;
