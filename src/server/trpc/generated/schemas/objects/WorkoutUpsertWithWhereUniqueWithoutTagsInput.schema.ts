import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutUpdateWithoutTagsInputObjectSchema } from "./WorkoutUpdateWithoutTagsInput.schema";
import { WorkoutUncheckedUpdateWithoutTagsInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutTagsInput.schema";
import { WorkoutCreateWithoutTagsInputObjectSchema } from "./WorkoutCreateWithoutTagsInput.schema";
import { WorkoutUncheckedCreateWithoutTagsInputObjectSchema } from "./WorkoutUncheckedCreateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpsertWithWhereUniqueWithoutTagsInput> = z
  .object({
    where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => WorkoutUpdateWithoutTagsInputObjectSchema),
      z.lazy(() => WorkoutUncheckedUpdateWithoutTagsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => WorkoutCreateWithoutTagsInputObjectSchema),
      z.lazy(() => WorkoutUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const WorkoutUpsertWithWhereUniqueWithoutTagsInputObjectSchema = Schema;
