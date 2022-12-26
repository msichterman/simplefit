import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagUpdateWithoutWorkoutsInputObjectSchema } from "./TagUpdateWithoutWorkoutsInput.schema";
import { TagUncheckedUpdateWithoutWorkoutsInputObjectSchema } from "./TagUncheckedUpdateWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutWorkoutsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutWorkoutsInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpdateWithWhereUniqueWithoutWorkoutsInputObjectSchema = Schema;
