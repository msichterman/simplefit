import { z } from "zod";
import { UserUpdateWithoutCustomerPaymentInputObjectSchema } from "./UserUpdateWithoutCustomerPaymentInput.schema";
import { UserUncheckedUpdateWithoutCustomerPaymentInputObjectSchema } from "./UserUncheckedUpdateWithoutCustomerPaymentInput.schema";
import { UserCreateWithoutCustomerPaymentInputObjectSchema } from "./UserCreateWithoutCustomerPaymentInput.schema";
import { UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerPaymentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserUpsertWithoutCustomerPaymentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutCustomerPaymentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutCustomerPaymentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutCustomerPaymentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutCustomerPaymentInputObjectSchema = Schema;
