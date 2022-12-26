import { z } from "zod";
import { UserCreateWithoutCustomerPaymentInputObjectSchema } from "./UserCreateWithoutCustomerPaymentInput.schema";
import { UserUncheckedCreateWithoutCustomerPaymentInputObjectSchema } from "./UserUncheckedCreateWithoutCustomerPaymentInput.schema";
import { UserCreateOrConnectWithoutCustomerPaymentInputObjectSchema } from "./UserCreateOrConnectWithoutCustomerPaymentInput.schema";
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutCustomerPaymentInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCustomerPaymentInputObjectSchema =
  Schema;
