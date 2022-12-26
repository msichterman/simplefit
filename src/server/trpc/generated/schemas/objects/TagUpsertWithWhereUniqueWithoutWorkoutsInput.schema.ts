import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithoutWorkoutsInputObjectSchema } from "./TagUpdateWithoutWorkoutsInput.schema";
import { TagUncheckedUpdateWithoutWorkoutsInputObjectSchema } from "./TagUncheckedUpdateWithoutWorkoutsInput.schema";
import { TagCreateWithoutWorkoutsInputObjectSchema } from "./TagCreateWithoutWorkoutsInput.schema";
import { TagUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./TagUncheckedCreateWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutWorkoutsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutWorkoutsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutWorkoutsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutWorkoutsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithWhereUniqueWithoutWorkoutsInputObjectSchema = Schema;
