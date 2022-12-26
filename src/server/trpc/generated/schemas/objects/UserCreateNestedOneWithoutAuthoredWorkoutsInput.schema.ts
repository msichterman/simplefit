import { z } from "zod";
import { UserCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateWithoutAuthoredWorkoutsInput.schema";
import { UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutAuthoredWorkoutsInput.schema";
import { UserCreateOrConnectWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateOrConnectWithoutAuthoredWorkoutsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuthoredWorkoutsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAuthoredWorkoutsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAuthoredWorkoutsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutAuthoredWorkoutsInputObjectSchema =
  Schema;
