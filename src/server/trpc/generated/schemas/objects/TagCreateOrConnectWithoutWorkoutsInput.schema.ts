import { z } from "zod";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";
import { TagCreateWithoutWorkoutsInputObjectSchema } from "./TagCreateWithoutWorkoutsInput.schema";
import { TagUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./TagUncheckedCreateWithoutWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutWorkoutsInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutWorkoutsInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutWorkoutsInputObjectSchema = Schema;
