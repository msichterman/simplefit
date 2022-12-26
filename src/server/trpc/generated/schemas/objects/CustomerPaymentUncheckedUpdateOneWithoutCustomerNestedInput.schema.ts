import { z } from "zod";
import { CustomerPaymentCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateWithoutCustomerInput.schema";
import { CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedCreateWithoutCustomerInput.schema";
import { CustomerPaymentCreateOrConnectWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateOrConnectWithoutCustomerInput.schema";
import { CustomerPaymentUpsertWithoutCustomerInputObjectSchema } from "./CustomerPaymentUpsertWithoutCustomerInput.schema";
import { CustomerPaymentWhereUniqueInputObjectSchema } from "./CustomerPaymentWhereUniqueInput.schema";
import { CustomerPaymentUpdateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUpdateWithoutCustomerInput.schema";
import { CustomerPaymentUncheckedUpdateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedUpdateWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentUncheckedUpdateOneWithoutCustomerNestedInput> =
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
      upsert: z
        .lazy(() => CustomerPaymentUpsertWithoutCustomerInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => CustomerPaymentWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => CustomerPaymentUpdateWithoutCustomerInputObjectSchema),
          z.lazy(
            () => CustomerPaymentUncheckedUpdateWithoutCustomerInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const CustomerPaymentUncheckedUpdateOneWithoutCustomerNestedInputObjectSchema =
  Schema;
