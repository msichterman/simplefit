import { z } from "zod";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./CustomerPaymentWhereUniqueInput.schema";
import { CustomerPaymentCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateWithoutCustomerInput.schema";
import { CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedCreateWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentCreateOrConnectWithoutCustomerInput> =
  z
    .object({
      where: z.lazy(() => CustomerPaymentWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => CustomerPaymentCreateWithoutCustomerInputObjectSchema),
        z.lazy(
          () => CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema
        ),
      ]),
    })
    .strict();

export const CustomerPaymentCreateOrConnectWithoutCustomerInputObjectSchema =
  Schema;
