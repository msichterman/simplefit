import { z } from "zod";
import { CustomerPaymentCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateWithoutCustomerInput.schema";
import { CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedCreateWithoutCustomerInput.schema";
import { CustomerPaymentCreateOrConnectWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateOrConnectWithoutCustomerInput.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./CustomerPaymentWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentCreateNestedOneWithoutCustomerInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CustomerPaymentCreateWithoutCustomerInputObjectSchema),
          z.lazy(
            () => CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => CustomerPaymentCreateOrConnectWithoutCustomerInputObjectSchema
        )
        .optional(),
      connect: z
        .lazy(() => CustomerPaymentWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const CustomerPaymentCreateNestedOneWithoutCustomerInputObjectSchema =
  Schema;
