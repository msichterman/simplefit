import { z } from "zod";

export const ExerciseOrderByRelevanceFieldEnumSchema = z.enum([
  "name",
  "difficulty",
  "reps",
  "rest",
  "exampleLink",
]);
