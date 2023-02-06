import Footer from "@/components/Footer";
import FullPageSpinner from "@/components/utils/FullPageSpinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type AuthLayoutProps = {
  children?: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { status } = useSession();
  const router = useRouter();
  const { id } = router.query;

  switch (status) {
    case "loading":
      return <FullPageSpinner />;
    case "authenticated":
      router.replace(
        { pathname: "/app/dashboard", query: { id } },
        "/app/dashboard"
      );
      return null;
    default:
      return (
        <div className="flex h-full max-h-full min-h-screen w-full min-w-full flex-col justify-between bg-neutral-50 dark:bg-neutral-900 dark:text-neutral-50">
          <div className="mx-auto flex h-full max-h-full w-full justify-center md:px-12 lg:px-0">
            <div className="z-10 flex flex-col py-10 px-4 sm:justify-center md:flex-none md:px-28 lg:shadow-2xl">
              <div className="mx-auto w-full sm:px-4 md:px-0">{children}</div>
            </div>
            <div className="hidden h-full w-full bg-radial-at-br from-amber-400 via-neutral-300 to-amber-600 lg:block" />
          </div>
          <Footer isTight />
        </div>
      );
  }
};

export default AuthLayout;
