import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserCreateWithoutSavedWorkoutsInput.schema";
import { UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutSavedWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSavedWorkoutsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSavedWorkoutsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSavedWorkoutsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutSavedWorkoutsInputObjectSchema = Schema;
