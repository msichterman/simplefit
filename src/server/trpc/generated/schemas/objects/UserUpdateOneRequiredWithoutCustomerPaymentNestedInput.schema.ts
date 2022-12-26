import { z } from "zod";
import { UserCreateWithoutCustomerPaymentInputObjectSchema } from "./UserCreateWithoutCustomerPaymentInput.schema";
import { UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerPaymentInput.schema";
import { UserCreateOrConnectWithoutCustomerPaymentInputObjectSchema } from "./UserCreateOrConnectWithoutCustomerPaymentInput.schema";
import { UserUpsertWithoutCustomerPaymentInputObjectSchema } from "./UserUpsertWithoutCustomerPaymentInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserUpdateWithoutCustomerPaymentInputObjectSchema } from "./UserUpdateWithoutCustomerPaymentInput.schema";
import { UserUncheckedUpdateWithoutCustomerPaymentInputObjectSchema } from "./UserUncheckedUpdateWithoutCustomerPaymentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCustomerPaymentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCustomerPaymentInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCustomerPaymentInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutCustomerPaymentInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutCustomerPaymentInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutCustomerPaymentInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCustomerPaymentNestedInputObjectSchema =
  Schema;
