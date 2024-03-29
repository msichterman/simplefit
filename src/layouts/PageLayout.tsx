import Header from "@/components/Header";
import Footer from "@/components/Footer";

type PageLayoutProps = {
  children?: React.ReactNode;
  isWideHeader?: boolean;
  isTightFooter?: boolean;
  isAppFooter?: boolean;
};

const PageLayout = ({
  children,
  isWideHeader = false,
  isTightFooter = false,
  isAppFooter = false,
}: PageLayoutProps) => {
  return (
    <div className="flex h-full min-h-screen w-full min-w-full flex-col justify-between bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-50">
      <Header isWide={isWideHeader} />
      <div className="mx-auto w-full">{children}</div>
      <Footer isTight={isTightFooter} isApp={isAppFooter} />
    </div>
  );
};

export default PageLayout;
