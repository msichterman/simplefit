import { z } from "zod";
import { UserCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateWithoutSavedWorkoutsInput.schema";
import { UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutSavedWorkoutsInput.schema";
import { UserCreateOrConnectWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateOrConnectWithoutSavedWorkoutsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutSavedWorkoutsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSavedWorkoutsInputObjectSchema),
          z.lazy(() => UserCreateWithoutSavedWorkoutsInputObjectSchema).array(),
          z.lazy(
            () => UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () => UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => UserCreateOrConnectWithoutSavedWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () => UserCreateOrConnectWithoutSavedWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutSavedWorkoutsInputObjectSchema =
  Schema;
