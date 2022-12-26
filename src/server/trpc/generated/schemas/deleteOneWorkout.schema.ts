import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";

export const WorkoutDeleteOneSchema = z.object({
  where: WorkoutWhereUniqueInputObjectSchema,
});
