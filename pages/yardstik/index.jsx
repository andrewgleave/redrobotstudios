import Head from "next/head";

const Privacy = () => {
  return (
    <div>
      <Head>
        <title>Yardstik - Privacy Policy</title>
      </Head>
      <header className="fixed h-14 top-0 left-0 right-0 z-10  backdrop-blur-md bg-white/90 flex items-center justify-center">
        <a className="flex items-center justify-center" href="/">
          <img
            src="/images/icon.svg"
            className="h-6"
            height={24}
            width={24}
            alt="Logo"
          />
          <h1 className="text-xl text-gray-900 font-medium tracking-tight text-center ml-3">
            Red Robot Studios
          </h1>
        </a>
      </header>
      <main className="prose max-w-md xl:max-w-3xl mx-auto py-16 sm:py-24 px-4 sm:px-0">
        <div className="[background-color:#fde047] w-40 h-40 rounded-full flex items-center justify-center mb-8">
          <img
            class="w-24 h-24"
            src="./images/yardstik.svg"
            width="96"
            height="96"
            alt="Logo"
          />
        </div>
        <h1>Yardstik Privacy Policy</h1>
        <p>
          Yardstik is provided as a personal measurement and distance tracking
          tool by Red Robot Studios Ltd for use on Apple Watch devices running
          WatchOS 6 and above. Yardstik is provided as is.
        </p>
        <h3>Data Collection</h3>
        <p>
          Yardstik neither collects nor stores any data whatsoever. Location
          data (GPS) is used solely for distance and movement calculation, and
          is neither stored on the device or transmitted to any other device or
          service.
        </p>
        <p>Yardstik does not communicate or initiate any network requests.</p>
        <p>
          Yardstick is an entirely on-device app, and Red Robot Studios does not
          collect any data whatsoever about the users or use of the application.
        </p>
        <h3>3rd Parties</h3>
        <p>
          Yardstik contains no 3rd Party dependencies (either direct or
          indirect), frameworks or other software.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          Red Robot Studios may update this Privacy Policy from time to time.
          Thus, you are advised to review this page periodically for any
          changes. We will notify you of any changes via the App Store. Changes
          are effective immediately after they are posted on this page.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or suggestions about this Privacy Policy, do
          not hesitate to contact me at&nbsp;
          <a
            className="hover:text-red-600 hover:underline"
            href="mailto:andrew@redrobotstudios.com">
            andrew@redrobotstudios.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Privacy;
