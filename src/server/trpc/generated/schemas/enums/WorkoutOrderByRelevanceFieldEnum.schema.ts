import { z } from "zod";

export const WorkoutOrderByRelevanceFieldEnumSchema = z.enum([
  "name",
  "description",
  "authorId",
]);
