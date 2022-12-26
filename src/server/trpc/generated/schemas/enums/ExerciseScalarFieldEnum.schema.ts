import { z } from "zod";

export const ExerciseScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "difficulty",
  "sets",
  "reps",
  "rest",
  "exampleLink",
  "createdAt",
  "updatedAt",
]);
