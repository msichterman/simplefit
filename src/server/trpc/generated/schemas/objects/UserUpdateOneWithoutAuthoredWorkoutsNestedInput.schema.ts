import { z } from "zod";
import { UserCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateWithoutAuthoredWorkoutsInput.schema";
import { UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutAuthoredWorkoutsInput.schema";
import { UserCreateOrConnectWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateOrConnectWithoutAuthoredWorkoutsInput.schema";
import { UserUpsertWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUpsertWithoutAuthoredWorkoutsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUpdateWithoutAuthoredWorkoutsInput.schema";
import { UserUncheckedUpdateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUncheckedUpdateWithoutAuthoredWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutAuthoredWorkoutsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutAuthoredWorkoutsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutAuthoredWorkoutsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutAuthoredWorkoutsInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutAuthoredWorkoutsNestedInputObjectSchema =
  Schema;
