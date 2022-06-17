import Head from "next/head";

import { colord } from "colord";

const makeLinearGradient = (a, b, degrees) =>
  `${a} linear-gradient(${degrees}deg, ${a} 0%, ${b} 100%)`;

const makeGradient = (
  topColor,
  bottomColor = null,
  degrees = 180,
  rotation = 5,
  darken = 0.1
) => {
  if (bottomColor === null) {
    bottomColor = colord(topColor)
      .darken(darken)
      .rotate(rotation)
      .toRgbString();
  }
  return `${topColor} linear-gradient(${degrees}deg, ${topColor} 0%, ${bottomColor} 100%)`;
};

const Projects = [
  {
    name: "Jobpo.st",
    description:
      "Create simple, clean job ad cards for sharing and social media",
    image: "/images/blank.svg",
    link: "https://jobpo.st",
    image: { src: "/images/jobpost.svg", className: "w-44" },
    background: makeGradient("#374151"),
    keywords: ["Next.js", "Tailwind", "Framer", "React"],
  },
  {
    name: "MCW / Kern Institute",
    description:
      "Night on Call helps evaluate whether medical students are ready for internship",
    link: "#",
    background: makeGradient(
      "#14b8a6",
      colord("#14b8a6").rotate(10).darken(0.05).toHex()
    ),
    image: { src: "/images/noc.svg", className: "w-22 drop-shadow-sm" },
    keywords: ["Python", "Django", "Tailwind", "Docker"],
  },
  {
    name: "SnipRSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: { src: "/images/snip.svg", className: "w-52" },
    link: "#",
    background: makeGradient("#3b82f6"),
    keywords: ["Go", "Chrome and Safari Extensions", "Sqlite"],
  },
  {
    name: "FlipRSS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: { src: "/images/flip.svg", className: "w-52" },
    link: "#",
    background: makeGradient("#2f84ba", "#ac0096"),
    keywords: ["Python", "Django", "Tailwind", "React"],
  },
  {
    name: "Yardstik",
    description:
      "Simple WatchOS app to measure distances on Apple Watch at a glance",
    image: { src: "/images/yardstik-watch.png", className: "h-60" },
    link: "#",
    background: makeGradient("#fee979", colord("#fde047").rotate(-5).toHex()),
    keywords: ["Swift", "SwiftUI"],
  },
  {
    name: "University of British Columbia",
    description:
      "EDI, MDI and ECHEQ help evaluate and report on child development across Canada",
    image: { src: "/images/ubc.svg", className: "w-32" },
    background: makeGradient("#1e40af"),
    link: "#",
    keywords: ["Python", "Django", "Redis", "Postgres"],
  },
  {
    name: "Slidecraft",
    description: "Create rich online presentations",
    image: { src: "/images/slidecraft.svg", className: "w-56" },
    background: makeGradient("#132557", "#0f172a"),
    link: "#",
    keywords: ["Go", "Redis", "Postgres"],
  },
  {
    name: "Djangogigs",
    description: "Django and python jobs for developers since 2008",
    image: { src: "/images/djangogigs.svg", className: "w-28" },
    background: makeGradient("#a3e635"),
    link: "#",
    keywords: ["Go", "Redis", "Postgres"],
  },
];

const Links = [
  { name: "Github", link: "https://github.com/andrewgleave" },
  { name: "Twitter", link: "https://twitter.com/andrewgleave" },
  { name: "Email", link: "mailto:andrew@redrobotstudios.com?subject=Hello" },
];

const Home = () => {
  return (
    <div className="py-28 bg-white ">
      <Head>
        <title>Red Robot Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed h-12 top-0 left-0 right-0 z-10  backdrop-blur-sm bg-white/60 flex items-center justify-center">
        <img src="/images/icon.svg" className="h-4" />
        <h1 className="text-lg text-gray-900 font-medium tracking-tight text-center ml-3">
          Red Robot Studios
        </h1>
      </header>

      <main className="max-w-md xl:max-w-3xl mx-auto grid grid-cols-2 gap-8 px-4">
        <div className="col-span-2 mb-8">
          <h3 className="font-semibold">Red Robot Studios is Andrew Gleave.</h3>
          <p className="mt-4">
            I am a software engineer with a passion for building useful things.
          </p>
          <p className="mt-1">
            I have worked with a variety of companies from small startups to
            universities and educational institutions.
          </p>
          <p className="mt-1">I also build my own SaaS products.</p>
          <p className="mt-1">
            I'm inteterested in UX and interface design, machine learning &amp;
            AI, family, running, spoon carving, coffee and have a Popperian
            philosophy.
          </p>
        </div>
        {Projects.map((project, index) => (
          <div
            key={project.name}
            className="col-span-2 xl:col-span-1 shadow-sm rounded-xl  overflow-hidden bg-gray-50 text-gray-900 mt-4"
          >
            <a
              href={project.link}
              style={{ background: project.background }}
              className="w-full h-72 bg-white flex items-center justify-center group"
            >
              <img
                src={project.image.src}
                className={`${project.image.className} transition-transform group-hover:scale-105 duration-200 group-hover:drop-shadow-md`}
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-medium">{project.name}</h2>
              <p className="text-base mt-2">{project.description}</p>
              <p className="text-sm mt-3 space-x-1 text-gray-900">
                {project.keywords.map((keyword, index) => (
                  <span key={index}>
                    <span className="text-light">{keyword}</span>
                    {index !== project.keywords.length - 1 && (
                      <span className="pl-2 text-gray-700">&middot;</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <ul className="col-span-2 xl:col-span-1 text-base">
            {Links.map((link, index) => (
              <li key={link.name} className="text-gray-900">
                <a href={link.link} className="hover:text-red-600">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
