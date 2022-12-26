import { z } from "zod";
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { CustomerPaymentUncheckedCreateNestedOneWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedCreateNestedOneWithoutCustomerInput.schema";
import { WorkoutUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutAuthorInput.schema";
import { WorkoutUncheckedCreateNestedManyWithoutSavedByInputObjectSchema } from "./WorkoutUncheckedCreateNestedManyWithoutSavedByInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    emailVerified: z.date().optional().nullable(),
    image: z.string().optional().nullable(),
    sessions: z
      .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
    role: z.lazy(() => RoleTypeSchema).optional(),
    customerPayment: z
      .lazy(
        () =>
          CustomerPaymentUncheckedCreateNestedOneWithoutCustomerInputObjectSchema
      )
      .optional(),
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

export const UserUncheckedCreateWithoutAccountsInputObjectSchema = Schema;
