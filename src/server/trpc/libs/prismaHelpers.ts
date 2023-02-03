import type { Context } from "../context";

export function isAuthorOrSuperAdmin(ctx: Context) {
  return Boolean(ctx?.session?.isUserSuperAdmin)
    ? { authorId: { not: undefined } }
    : { authorId: ctx?.session?.user?.id ?? "" };
}
