import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUpdateManyWithoutUserNestedInput.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { EnumRoleTypeFieldUpdateOperationsInputObjectSchema } from "./EnumRoleTypeFieldUpdateOperationsInput.schema";
import { CustomerPaymentUpdateOneWithoutCustomerNestedInputObjectSchema } from "./CustomerPaymentUpdateOneWithoutCustomerNestedInput.schema";
import { WorkoutUpdateManyWithoutAuthorNestedInputObjectSchema } from "./WorkoutUpdateManyWithoutAuthorNestedInput.schema";
import { WorkoutUpdateManyWithoutSavedByNestedInputObjectSchema } from "./WorkoutUpdateManyWithoutSavedByNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    emailVerified: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleTypeSchema),
        z.lazy(() => EnumRoleTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    customerPayment: z
      .lazy(
        () => CustomerPaymentUpdateOneWithoutCustomerNestedInputObjectSchema
      )
      .optional(),
    authoredWorkouts: z
      .lazy(() => WorkoutUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
    savedWorkouts: z
      .lazy(() => WorkoutUpdateManyWithoutSavedByNestedInputObjectSchema)
      .optional(),
    username: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const UserUpdateWithoutSessionsInputObjectSchema = Schema;