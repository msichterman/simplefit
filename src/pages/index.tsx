import { type NextPage } from "next";
import Head from "next/head";
import ExternalLink from "../components/ExternalLink";
import WebForestry from "../components/vectors/WebForestry";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simple Fit</title>
        <meta
          name="description"
          content="Simple, tailored workouts at your fingertips."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-stone-900">
        <div className="container flex flex-col items-center justify-center px-4 py-16 ">
          <p className="text-xxs border-t-2 p-1 uppercase italic tracking-wide text-neutral-50 sm:text-sm text-shadow shadow-amber-600/50">
            – Coming Soon –
          </p>
          <h1 className="text-shadow-lg mb-16 mt-4 text-5xl font-extrabold tracking-tight text-neutral-50 shadow-amber-600/30 sm:text-[5rem]">
            simplefit
          </h1>
          <ExternalLink to="https://webforestry.com">
            <div className="flex items-center rounded-md border border-emerald-600 bg-emerald-50 p-1 text-zinc-800">
              <WebForestry className="h-4" />
            </div>
          </ExternalLink>
        </div>
      </main>
    </>
  );
};

export default Home;
