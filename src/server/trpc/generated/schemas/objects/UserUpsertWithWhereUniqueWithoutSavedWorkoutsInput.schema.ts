import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutSavedWorkoutsInputObjectSchema } from "./UserUpdateWithoutSavedWorkoutsInput.schema";
import { UserUncheckedUpdateWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedUpdateWithoutSavedWorkoutsInput.schema";
import { UserCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateWithoutSavedWorkoutsInput.schema";
import { UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutSavedWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutSavedWorkoutsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutSavedWorkoutsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSavedWorkoutsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutSavedWorkoutsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema =
  Schema;
