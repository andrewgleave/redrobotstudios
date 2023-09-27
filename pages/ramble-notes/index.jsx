import Head from "next/head";

const Privacy = () => {
  return (
    <div>
      <Head>
        <title>Ramble Notes - Privacy Policy</title>
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
        <div className="w-40 h-40 rounded-md flex items-center justify-center mb-8">
          <img
            class="w-24 h-24"
            src="./images/ramble-notes.svg"
            width="96"
            height="96"
            alt="Logo"
          />
        </div>
        <h1>Ramble Notes Privacy Policy</h1>
        <p>
          Ramble Notes is provided as a personal voice recording, transcription
          and note taking tool by Red Robot Studios Ltd for use on iOS, iPadOS
          and MacOS devices running iOS 17, iPadOS 17 and MacOS 14 and above.
          Ramble Notes is provided as is.
        </p>
        <h3>Data Collection</h3>
        <p>
          Ramble Notes collects no data whatsoever. Audio recordings and their
          transcriptions are stored locally on the device and are not
          transmitted to any other device or service.
        </p>
        <p>
          Audio transcription is performed locally on the device, and is not
          transmitted to any other device or service for processing.
        </p>
        <p>
          Summarization is performed by OpenAI's GPT-4 API via a secure TLS 1.2+
          connection. Transcript text is transmitted to OpenAI's servers for
          processing, and the resulting summary is returned to the device. No
          audio data is transmitted to OpenAI's servers.
        </p>
        <p>
          OpenAI's GPT-4 API is used solely for summarization, and is not used
          for any other purpose. OpenAI does not store any data from the API
          requests and does not use data submitted via the API to train or
          improve their models. See{" "}
          <a
            href="https://openai.com/enterprise-privacy#our-commitments"
            target="_blank">
            OpenAI's Enterprise Privacy Commitments
          </a>
          .
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
