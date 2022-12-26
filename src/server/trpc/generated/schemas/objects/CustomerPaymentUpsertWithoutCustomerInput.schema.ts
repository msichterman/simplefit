import { z } from "zod";
import { CustomerPaymentUpdateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUpdateWithoutCustomerInput.schema";
import { CustomerPaymentUncheckedUpdateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedUpdateWithoutCustomerInput.schema";
import { CustomerPaymentCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentCreateWithoutCustomerInput.schema";
import { CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema } from "./CustomerPaymentUncheckedCreateWithoutCustomerInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CustomerPaymentUpsertWithoutCustomerInput> = z
  .object({
    update: z.union([
      z.lazy(() => CustomerPaymentUpdateWithoutCustomerInputObjectSchema),
      z.lazy(
        () => CustomerPaymentUncheckedUpdateWithoutCustomerInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => CustomerPaymentCreateWithoutCustomerInputObjectSchema),
      z.lazy(
        () => CustomerPaymentUncheckedCreateWithoutCustomerInputObjectSchema
      ),
    ]),
  })
  .strict();

export const CustomerPaymentUpsertWithoutCustomerInputObjectSchema = Schema;
