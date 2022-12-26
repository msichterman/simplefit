import { z } from "zod";

export const WorkoutScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "authorId",
  "createdAt",
  "updatedAt",
]);
