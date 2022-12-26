import { z } from "zod";

export const RoleTypeSchema = z.enum(["USER", "ADMIN", "SUPERADMIN"]);
