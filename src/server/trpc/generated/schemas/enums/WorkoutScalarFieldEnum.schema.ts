import { z } from "zod";

export const WorkoutScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "description",
  "authorId",
  "createdAt",
  "updatedAt",
]);
