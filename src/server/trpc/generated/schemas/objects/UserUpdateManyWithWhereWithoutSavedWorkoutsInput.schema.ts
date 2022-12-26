import { z } from "zod";
import { UserScalarWhereInputObjectSchema } from "./UserScalarWhereInput.schema";
import { UserUpdateManyMutationInputObjectSchema } from "./UserUpdateManyMutationInput.schema";
import { UserUncheckedUpdateManyWithoutSavedByInputObjectSchema } from "./UserUncheckedUpdateManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutSavedWorkoutsInput> =
  z
    .object({
      where: z.lazy(() => UserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateManyMutationInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateManyWithoutSavedByInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateManyWithWhereWithoutSavedWorkoutsInputObjectSchema =
  Schema;
