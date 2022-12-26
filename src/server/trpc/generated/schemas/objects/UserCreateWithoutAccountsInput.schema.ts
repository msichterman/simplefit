import { z } from "zod";
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { CustomerPaymentCreateNestedOneWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateNestedOneWithoutCustomerInput.schema";
import { WorkoutCreateNestedManyWithoutAuthorInputObjectSchema } from "./WorkoutCreateNestedManyWithoutAuthorInput.schema";
import { WorkoutCreateNestedManyWithoutSavedByInputObjectSchema } from "./WorkoutCreateNestedManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    role: z.lazy(() => RoleTypeSchema).optional(),
    customerPayment: z
      .lazy(
        () => CustomerPaymentCreateNestedOneWithoutCustomerInputObjectSchema
      )
      .optional(),
    authoredWorkouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
    savedWorkouts: z
      .lazy(() => WorkoutCreateNestedManyWithoutSavedByInputObjectSchema)
      .optional(),
    username: z.string().optional(),
    createdAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
  })
  .strict();

export const UserCreateWithoutAccountsInputObjectSchema = Schema;
