import { z } from "zod";
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { CustomerPaymentCreateNestedOneWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateNestedOneWithoutCustomerInput.schema";
import { WorkoutCreateNestedManyWithoutSavedByInputObjectSchema } from "./WorkoutCreateNestedManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAuthoredWorkoutsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    role: z.lazy(() => RoleTypeSchema).optional(),
    customerPayment: z
      .lazy(
        () => CustomerPaymentCreateNestedOneWithoutCustomerInputObjectSchema
      )
      .optional(),
    savedWorkouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutSavedByInputObjectSchema)
      .optional(),
    username: z.string().optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const UserCreateWithoutAuthoredWorkoutsInputObjectSchema = Schema;
