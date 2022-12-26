import { z } from "zod";
import { UserCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateWithoutSavedWorkoutsInput.schema";
import { UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutSavedWorkoutsInput.schema";
import { UserCreateOrConnectWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateOrConnectWithoutSavedWorkoutsInput.schema";
import { UserUpsertWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema } from "./UserUpsertWithWhereUniqueWithoutSavedWorkoutsInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema } from "./UserUpdateWithWhereUniqueWithoutSavedWorkoutsInput.schema";
import { UserUpdateManyWithWhereWithoutSavedWorkoutsInputObjectSchema } from "./UserUpdateManyWithWhereWithoutSavedWorkoutsInput.schema";
import { UserScalarWhereInputObjectSchema } from "./UserScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutSavedWorkoutsNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserUpsertWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () =>
                UserUpsertWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputObjectSchema),
          z.lazy(() => UserWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () =>
                UserUpdateWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserUpdateManyWithWhereWithoutSavedWorkoutsInputObjectSchema
          ),
          z
            .lazy(
              () => UserUpdateManyWithWhereWithoutSavedWorkoutsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputObjectSchema),
          z.lazy(() => UserScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateManyWithoutSavedWorkoutsNestedInputObjectSchema = Schema;
