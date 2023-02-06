import { env } from "@/env/client.mjs";

export const getBaseUrl = () => {
  return env.NEXT_PUBLIC_BASE_URL;
};
