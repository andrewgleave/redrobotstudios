import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Yardstik - Privacy Policy</title>
      </Head>
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
          <a href="mailto:andrew@redrobotstudios.com">
            andrew@redrobotstudios.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Home;
