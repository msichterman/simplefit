import { z } from "zod";
import { WorkoutCreateWithoutAuthorInputObjectSchema } from "./WorkoutCreateWithoutAuthorInput.schema";
import { WorkoutUncheckedCreateWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedCreateWithoutAuthorInput.schema";
import { WorkoutCreateOrConnectWithoutAuthorInputObjectSchema } from "./WorkoutCreateOrConnectWithoutAuthorInput.schema";
import { WorkoutCreateManyAuthorInputEnvelopeObjectSchema } from "./WorkoutCreateManyAuthorInputEnvelope.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateNestedManyWithoutAuthorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkoutCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => WorkoutCreateWithoutAuthorInputObjectSchema).array(),
        z.lazy(() => WorkoutUncheckedCreateWithoutAuthorInputObjectSchema),
        z
          .lazy(() => WorkoutUncheckedCreateWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => WorkoutCreateOrConnectWithoutAuthorInputObjectSchema),
        z
          .lazy(() => WorkoutCreateOrConnectWithoutAuthorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => WorkoutCreateManyAuthorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        z.lazy(() => WorkoutWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const WorkoutCreateNestedManyWithoutAuthorInputObjectSchema = Schema;
