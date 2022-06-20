import Head from "next/head";

import { colord } from "colord";

const makeGradient = (
  top,
  bottom = null,
  deg = 180,
  rotation = 5,
  darken = 0.1
) => {
  if (bottom === null) {
    bottom = colord(top).darken(darken).rotate(rotation).toRgbString();
  }
  return `${top} linear-gradient(${deg}deg, ${top} 0%, ${bottom} 100%)`;
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
    keywords: ["Next.js", "React", "Tailwind", "Framer"],
  },
  {
    name: "MCW / Kern Institute",
    description:
      "Night on Call helps evaluate students' readiness for internship",
    link: "https://nightoncall.mcw.edu",
    background: makeGradient("#14b8a6", "#129aa1"),
    image: { src: "/images/noc.svg", className: "w-22 drop-shadow-sm" },
    keywords: ["Python", "Django", "OpenAI", "Tailwind", "Docker"],
  },
  {
    name: "SnipRSS",
    description: "For all the great web content that doesn't have a feed",
    image: { src: "/images/snip.svg", className: "w-52" },
    link: "https://sniprss.com",
    background: makeGradient("#3b82f6"),
    keywords: ["Go", "Browser Extensions", "SQLite", "Docker"],
  },
  {
    name: "FlipRSS",
    description: "Personalised email newsletters powered by RSS and Mailchimp",
    image: { src: "/images/flip.svg", className: "w-52" },
    link: "https://fliprss.com",
    background: makeGradient("#2f84ba", "#ac0096"),
    keywords: ["Python", "Django", "React", "Tailwind"],
  },
  {
    name: "Yardstik",
    description:
      "Simple WatchOS app to measure distances on Apple Watch at a glance",
    image: { src: "/images/yardstik-watch.png", className: "h-60" },
    link: "https://apps.apple.com/gb/app/yardstik/id1491400979",
    background: makeGradient("#fee979", "#fdd047"),
    keywords: ["Swift", "SwiftUI"],
  },
  {
    name: "University of British Columbia",
    description:
      "EDI, MDI and ECHEQ help evaluate child development across Canada",
    image: { src: "/images/ubc.svg", className: "w-32" },
    background: makeGradient("#1e40af"),
    link: "http://earlylearning.ubc.ca/mdi/",
    keywords: ["Python", "Django", "Redis", "Postgres"],
  },
  {
    name: "Slidecraft",
    description: "Create and share rich online presentations (retired)",
    image: { src: "/images/slidecraft.svg", className: "w-56" },
    background: makeGradient("#132557", "#0f172a"),
    link: "https://vimeo.com/240399357",
    keywords: ["Go", "React", "Redis", "Postgres"],
  },
  {
    name: "Djangogigs",
    description: "Django and python jobs for developers since 2008",
    image: { src: "/images/djangogigs.svg", className: "w-28" },
    background: makeGradient("#a3e635"),
    link: "https://djangogigs.com",
    keywords: ["Python", "Django", "Redis", "Postgres"],
  },
];

const Links = [
  { name: "Github", link: "https://github.com/andrewgleave" },
  { name: "Twitter", link: "https://twitter.com/andrewgleave" },
  { name: "Email", link: "mailto:andrew@redrobotstudios.com?subject=Hello" },
  { name: "Privacy", link: "/privacy" },
];

const Home = () => {
  return (
    <div className="py-32 bg-white">
      <Head>
        <title>Red Robot Studios - Andrew Gleave - Software Engineer</title>
        <meta name="description" content="Andrew Gleave - Software Engineer" />
        <meta
          name="keywords"
          content="Andrew Gleave, Software Engineer, Red Robot Studios"
        />
        <meta name="author" content="Andrew Gleave" />
        <meta property="og:title" content="Red Robot Studios" />
        <meta
          property="og:description"
          content="Andrew Gleave - Software Engineer"
        />
        <meta
          property="og:image"
          content="https://www.redrobotstudios.com/images/og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Red Robot Studios" />
        <meta
          name="twitter:description"
          content="Andrew Gleave - Software Engineer"
        />
        <meta
          name="twitter:image"
          content="https://www.redrobotstudios.com/images/og.jpg"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <header className="fixed h-14 top-0 left-0 right-0 z-10  backdrop-blur-md bg-white/90 flex items-center justify-center">
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
      </header>

      <main className="max-w-md xl:max-w-3xl mx-auto grid grid-cols-2 gap-8 px-4">
        <div className="col-span-2 mb-8">
          <h3 className="font-semibold">Red Robot Studios is Andrew Gleave</h3>
          <p className="mt-4">
            I am a software engineer with a passion for building useful tools,
            products and services.
          </p>
          <p className="mt-2">
            I have 20+ years as a software engineer and have worked with a
            variety of companies from small startups to universities and
            educational institutions.
          </p>
          <p className="mt-2">I also build my own SaaS products.</p>
          <p className="mt-2">
            I'm inteterested in UX and interface design, ML/AI, family, running,
            reading, spoon carving and coffee.
          </p>
          <p className="mt-2">
            The most impactful book I have read is The Beginning of Infinity by
            David Deutsch.
          </p>
        </div>
        {Projects.map((project) => (
          <div
            key={project.name}
            className="col-span-2 xl:col-span-1 shadow-sm rounded-xl  overflow-hidden bg-gray-50 text-gray-900 mt-4"
          >
            <a
              href={project.link}
              style={{ background: project.background }}
              className="w-full h-72 bg-white flex items-center justify-center group cursor-pointer"
            >
              <img
                src={project.image.src}
                className={`${project.image.className}`}
                alt={project.name}
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
            {Links.map((link) => (
              <li key={link.name} className="text-gray-900">
                <a
                  href={link.link}
                  rel="noopener noreferrer"
                  className="hover:text-red-600 hover:underline"
                >
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
