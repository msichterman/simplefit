import { z } from "zod";
import { UserUpdateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUpdateWithoutAuthoredWorkoutsInput.schema";
import { UserUncheckedUpdateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUncheckedUpdateWithoutAuthoredWorkoutsInput.schema";
import { UserCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateWithoutAuthoredWorkoutsInput.schema";
import { UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutAuthoredWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutAuthoredWorkoutsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutAuthoredWorkoutsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutAuthoredWorkoutsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutAuthoredWorkoutsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutAuthoredWorkoutsInputObjectSchema = Schema;
