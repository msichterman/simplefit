import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagCreateWithoutExercisesInputObjectSchema } from "./TagCreateWithoutExercisesInput.schema";
import { TagUncheckedCreateWithoutExercisesInputObjectSchema } from "./TagUncheckedCreateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutExercisesInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutExercisesInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutExercisesInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutExercisesInputObjectSchema = Schema;
