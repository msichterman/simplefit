import { z } from "zod";
import { SubscriptionTypeSchema } from "../enums/SubscriptionType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumSubscriptionTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => SubscriptionTypeSchema).optional(),
    })
    .strict();

export const EnumSubscriptionTypeFieldUpdateOperationsInputObjectSchema =
  Schema;
