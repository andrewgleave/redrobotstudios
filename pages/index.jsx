import Head from "next/head";
import Image from "next/image";

import { colord } from "colord";

const scale = (value, threshold, a, b) => {
  const val = a + ((b - a) * value) / threshold;
  return Math.max(b, Math.min(a, val));
};

const getGradient = (a, b, degrees) =>
  `${a} linear-gradient(${degrees}deg, ${a} 0%, ${b} 100%)`;

const buildGradient = (color, rotation = 10, darken = 0.1) => {
  const c = colord(color);
  return `${c.toHslString()} linear-gradient(to bottom, ${c.toHslString()} 0%, ${c
    .rotate(rotation)
    .darken(darken)
    .toHslString()} 100%)`;
};

const Projects = [
  {
    name: "Jobpo.st",
    description:
      "Create simple, clean job ad cards for sharing and social media",
    image: "/images/blank.svg",
    link: "https://jobpo.st",
    image: <img src={"/images/jobpost.svg"} className="h-10 drop-shadow-md" />,
    background: getGradient("rgb(255, 255, 255)", "rgb(252, 252, 252)", 180),
    keywords: ["Next.js", "Tailwind", "Framer", "React"],
  },
  {
    name: "Medical College Wisconsin",
    description:
      "Night on Call helps evaluate whether medical students are ready for internship",
    image: "/images/project-2.jpg",
    link: "#",
    background: getGradient(
      "#ccfbf1",
      colord("#ccfbf1").darken(0.18).toHslString(),
      180
    ),
    image: <img src={"/images/noc.png"} className="h-20 drop-shadow-md" />,
    keywords: ["Python", "Django", "Tailwind", "Docker"],
  },
  {
    name: "FlipRSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: <img src={"/images/flip.svg"} className="h-20 drop-shadow-md" />,
    link: "#",
    background: getGradient("#ebe7ff", colord("#f4f8ff").toHslString(), 0),
    keywords: ["Python", "Django", "Tailwind", "React"],
  },
  {
    name: "SnipRSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: <img src={"/images/snip.svg"} className="h-16 drop-shadow-md" />,
    link: "#",
    background: getGradient("#dbeafe", "#fff", 0),
    keywords: ["Go", "Chrome and Safari Extensions", "Sqlite"],
  },
  {
    name: "Yardstik",
    description: "Simple WatchOS app to measure distances on Apple Watch",
    image: (
      <img src={"/images/yardstik-watch.png"} className="h-56 drop-shadow-sm" />
    ),
    link: "#",
    background: getGradient(
      colord("#f9ea1f").lighten(0.1).toRgbString(),
      colord("#f9ea1f").rotate(-5).toRgbString(),
      180
    ),
    keywords: ["Swift", "SwiftUI"],
  },
  {
    name: "University of British Columbia",
    description:
      "2012-2021 designed and built the EDI, MDI and ECHEQ online survey instruments for child development",
    image: <img src={"/images/ubc.svg"} className="h-32 drop-shadow-md" />,
    background: getGradient(
      colord("#f0f9ff").toRgbString(),
      colord("#fff").rotate(-5).toRgbString(),
      180
    ),
    link: "#",
    keywords: ["Python", "Djagno", "Redis", "Postgres"],
  },
];

const Home = () => {
  return (
    <div className="py-24 bg-white ">
      <Head>
        <title>Red Robot Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed h-12 top-0 left-0 right-0 z-10  backdrop-blur-md bg-neutral-100/60 flex items-center justify-center">
        <h1 className="text-lg text-gray-900 font-medium tracking-tight text-center">
          Red Robot Studios
        </h1>
      </header>

      <main className="max-w-md xl:max-w-4xl mx-auto grid grid-cols-2 gap-8 px-4">
        <div className="col-span-2">
          <p className="text-gray-900 text-base font-medium">
            Red Robot Studios is Andrew Gleave.
          </p>
          <p className="text-gray-500 text-base  mt-3 font-light">
            I am a software engineer with a passion for building useful things.
          </p>
        </div>
        {Projects.map((project, index) => (
          <div
            key={index}
            className="col-span-2 xl:col-span-1 shadow-sm rounded-xl ring-1 ring-black/5 overflow-hidden bg-gray-50 text-gray-900 mt-4"
          >
            <div
              //style={{ background: project.background }}
              className="w-full h-72 bg-white flex items-center justify-center bg-gradient-to-b"
            >
              {project.image}
            </div>
            <div className="px-6 py-8">
              <h2 className="text-base font-medium">{project.name}</h2>
              <p className="text-base mt-2">{project.description}</p>
              <p className="text-sm mt-4 space-x-1 text-gray-600">
                {project.keywords.map((keyword, index) => (
                  <span>
                    <span key={index} className="text-light">
                      {keyword}
                    </span>
                    {index !== project.keywords.length - 1 && (
                      <span className="pl-2 text-gray-400">&middot;</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
        <ul className="">
          <li>Posts</li>
          <li>Twitter</li>
          <li>Github</li>
          <li>Email</li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
