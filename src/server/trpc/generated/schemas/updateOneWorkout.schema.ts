import { z } from "zod";
import { WorkoutUpdateInputObjectSchema } from "./objects/WorkoutUpdateInput.schema";
import { WorkoutUncheckedUpdateInputObjectSchema } from "./objects/WorkoutUncheckedUpdateInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";

export const WorkoutUpdateOneSchema = z.object({
  data: z.union([
    WorkoutUpdateInputObjectSchema,
    WorkoutUncheckedUpdateInputObjectSchema,
  ]),
  where: WorkoutWhereUniqueInputObjectSchema,
});
