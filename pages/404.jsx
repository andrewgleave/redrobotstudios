import Head from "next/head";

const Error404 = () => {
  return (
    <div>
      <Head>
        <title>Red Robot Studios - Privacy Policy</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/images/icon.svg"
            className="w-32 h-32"
            width="128"
            height="128"
            alt="Logo"
          />
          <h1 className="text-2xl font-medium mt-4">Page not found</h1>
        </div>
      </main>
    </div>
  );
};

export default Error404;
