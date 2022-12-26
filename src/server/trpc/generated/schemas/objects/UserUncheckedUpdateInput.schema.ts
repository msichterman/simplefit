import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUncheckedUpdateManyWithoutUserNestedInput.schema";
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema";
import { RoleTypeSchema } from "../enums/RoleType.schema";
import { EnumRoleTypeFieldUpdateOperationsInputObjectSchema } from "./EnumRoleTypeFieldUpdateOperationsInput.schema";
import { CustomerPaymentUncheckedUpdateOneWithoutCustomerNestedInputObjectSchema } from "./CustomerPaymentUncheckedUpdateOneWithoutCustomerNestedInput.schema";
import { WorkoutUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema } from "./WorkoutUncheckedUpdateManyWithoutAuthorNestedInput.schema";
import { WorkoutUncheckedUpdateManyWithoutSavedByNestedInputObjectSchema } from "./WorkoutUncheckedUpdateManyWithoutSavedByNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
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
      .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    sessions: z
      .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleTypeSchema),
        z.lazy(() => EnumRoleTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    customerPayment: z
      .lazy(
        () =>
          CustomerPaymentUncheckedUpdateOneWithoutCustomerNestedInputObjectSchema
      )
      .optional(),
    authoredWorkouts: z
      .lazy(
        () => WorkoutUncheckedUpdateManyWithoutAuthorNestedInputObjectSchema
      )
      .optional(),
    savedWorkouts: z
      .lazy(
        () => WorkoutUncheckedUpdateManyWithoutSavedByNestedInputObjectSchema
      )
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

export const UserUncheckedUpdateInputObjectSchema = Schema;
