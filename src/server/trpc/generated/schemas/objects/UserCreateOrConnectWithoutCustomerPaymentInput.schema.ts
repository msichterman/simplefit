import { z } from "zod";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";
import { UserCreateWithoutCustomerPaymentInputObjectSchema } from "./UserCreateWithoutCustomerPaymentInput.schema";
import { UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerPaymentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutCustomerPaymentInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCustomerPaymentInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutCustomerPaymentInputObjectSchema =
  Schema;
