import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseCreateWithoutTagsInputObjectSchema } from "./ExerciseCreateWithoutTagsInput.schema";
import { ExerciseUncheckedCreateWithoutTagsInputObjectSchema } from "./ExerciseUncheckedCreateWithoutTagsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateOrConnectWithoutTagsInput> = z
  .object({
    where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExerciseCreateWithoutTagsInputObjectSchema),
      z.lazy(() => ExerciseUncheckedCreateWithoutTagsInputObjectSchema),
    ]),
  })
  .strict();

export const ExerciseCreateOrConnectWithoutTagsInputObjectSchema = Schema;
