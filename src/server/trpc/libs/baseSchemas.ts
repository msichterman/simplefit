import { z } from "zod";

export const exerciseSchema = z.object({
  id: z.number(),
  name: z.string(),
  difficulty: z.string(),
  sets: z.number(),
  reps: z.string(),
  rest: z.string(),
  exampleLink: z.string(),
});
