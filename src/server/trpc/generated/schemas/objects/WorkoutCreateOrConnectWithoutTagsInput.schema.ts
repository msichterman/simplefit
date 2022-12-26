import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutCreateWithoutTagsInputObjectSchema } from "./WorkoutCreateWithoutTagsInput.schema";
import { WorkoutUncheckedCreateWithoutTagsInputObjectSchema } from "./WorkoutUncheckedCreateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => WorkoutCreateWithoutTagsInputObjectSchema),
      z.lazy(() => WorkoutUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const WorkoutCreateOrConnectWithoutTagsInputObjectSchema = Schema;
