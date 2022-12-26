import { z } from "zod";
import { TagCreateWithoutWorkoutsInputObjectSchema } from "./TagCreateWithoutWorkoutsInput.schema";
import { TagUncheckedCreateWithoutWorkoutsInputObjectSchema } from "./TagUncheckedCreateWithoutWorkoutsInput.schema";
import { TagCreateOrConnectWithoutWorkoutsInputObjectSchema } from "./TagCreateOrConnectWithoutWorkoutsInput.schema";
import { TagWhereUniqueInputObjectSchema } from "./TagWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TagCreateNestedManyWithoutWorkoutsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutWorkoutsInputObjectSchema),
        z.lazy(() => TagCreateWithoutWorkoutsInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutWorkoutsInputObjectSchema),
        z
          .lazy(() => TagUncheckedCreateWithoutWorkoutsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutWorkoutsInputObjectSchema),
        z
          .lazy(() => TagCreateOrConnectWithoutWorkoutsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagCreateNestedManyWithoutWorkoutsInputObjectSchema = Schema;
