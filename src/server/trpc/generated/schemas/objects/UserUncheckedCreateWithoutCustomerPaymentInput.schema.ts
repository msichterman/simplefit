import { z } from "zod";
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { WorkoutUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutAuthorInput.schema";
import { WorkoutUncheckedCreateNestedManyWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutCustomerPaymentInput> =
  z
    .object({
      id: z.string().optional(),
      name: z.string().optional().nullable(),
      email: z.string().optional().nullable(),
      emailVerified: z.date().optional().nullable(),
      image: z.string().optional().nullable(),
      accounts: z
        .lazy(
          () => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
      sessions: z
        .lazy(
          () => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema
        )
        .optional(),
      role: z.lazy(() => RoleTypeSchema).optional(),
      authoredWorkouts: z
        .lazy(
          () => WorkoutUncheckedCreateNestedManyWithoutAuthorInputObjectSchema
        )
        .optional(),
      savedWorkouts: z
        .lazy(
          () => WorkoutUncheckedCreateNestedManyWithoutSavedByInputObjectSchema
        )
        .optional(),
      username: z.string().optional(),
      createdAt: z.date().optional().nullable(),
      updatedAt: z.date().optional().nullable(),
    })
    .strict();

export const UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema =
  Schema;
