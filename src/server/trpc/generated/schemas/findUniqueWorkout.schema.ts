import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";

export const WorkoutFindUniqueSchema = z.object({
  where: WorkoutWhereUniqueInputObjectSchema,
});
