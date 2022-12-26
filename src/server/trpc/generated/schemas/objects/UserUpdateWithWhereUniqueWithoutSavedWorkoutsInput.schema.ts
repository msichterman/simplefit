import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutSavedWorkoutsInputObjectSchema } from "./UserUpdateWithoutSavedWorkoutsInput.schema";
import { UserUncheckedUpdateWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedUpdateWithoutSavedWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutSavedWorkoutsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutSavedWorkoutsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSavedWorkoutsInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutSavedWorkoutsInputObjectSchema =
  Schema;
