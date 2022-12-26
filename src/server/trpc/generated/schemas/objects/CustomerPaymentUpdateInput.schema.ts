import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";
import { EnumSubscriptionTypeFieldUpdateOperationsInputObjectSchema } from "./EnumSubscriptionTypeFieldUpdateOperationsInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutCustomerPaymentNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutCustomerPaymentNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    paymentId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    subscriptionType: z
      .union([
        z.lazy(() => SubscriptionTypeSchema),
        z.lazy(
          () => EnumSubscriptionTypeFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    deletedAt: z
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
    customer: z
      .lazy(
        () => UserUpdateOneRequiredWithoutCustomerPaymentNestedInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const CustomerPaymentUpdateInputObjectSchema = Schema;
