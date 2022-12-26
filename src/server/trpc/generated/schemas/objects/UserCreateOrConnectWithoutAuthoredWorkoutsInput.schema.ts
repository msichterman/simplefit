import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserCreateWithoutAuthoredWorkoutsInput.schema";
import { UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema } from "./UserUncheckedCreateWithoutAuthoredWorkoutsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuthoredWorkoutsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAuthoredWorkoutsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutAuthoredWorkoutsInputObjectSchema
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutAuthoredWorkoutsInputObjectSchema =
  Schema;
