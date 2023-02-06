export const getBaseUrl = () => {
  const vercelUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl}`; // Vercel URL if deployed
  return `http://localhost:${process.env.PORT ?? 3000}`; // Dev should use localhost
};
