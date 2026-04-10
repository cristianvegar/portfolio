// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

const translations = {
  en: {
    introPre: "Hi, I'm Cristian Vega.",
    title: "Backend & Cloud Integration Engineer.",
    subtitle: "I build scalable architectures, secure APIs and integration pipelines for enterprise systems and cloud services.",
    skills: "C# · Python · .NET · APIGee · AWS · Azure · GCP",
    nav: ["About", "Experience", "Projects", "Contact"],
    aboutLabel: "About",
    aboutIntro: "I am an engineer with over 5 years of experience in backend development and cloud integration platforms. I focus on robust solutions that connect distributed systems and support critical business operations.",
    aboutDetails: "I have led API integrations, modernized microservices, and designed deployment processes that improve stability and reduce operational costs.",
    experienceLabel: "Experience",
    inchcapeCompany: "Inchcape Digital",
    inchcapeRole: "Integrations Engineer",
    inchcapeDate: "2025 - Present",
    inchcapeItem1: "Designed and implemented APIGee integrations to improve interoperability between internal systems and external providers.",
    inchcapeItem2: "Optimized data pipelines in AWS and GCP, reducing response times and operational failures.",
    inchcapeItem3: "Implemented monitoring and alerts to ensure availability and performance of critical APIs.",
    globantCompany: "Globant",
    globantRole: "Ssr .NET Engineer",
    globantDate: "2021 - 2025",
    globantItem1: "Built ASP.NET Core microservices to support high-concurrency business needs.",
    globantItem2: "Developed Azure Functions and AWS Lambdas to consolidate integration workflows.",
    globantItem3: "Improved code quality with automated testing using NUnit and Selenium.",
    projectsLabel: "Projects",
    project1Title: "Vehicle Telemetry System",
    project1Description: "Real-time monitoring platform with a .NET backend, React Native client, and distributed MongoDB database.",
    project2Title: "API Integration Platform",
    project2Description: "Centralized gateway to orchestrate internal and external services using APIGee and serverless functions.",
    project3Title: "Cloud Migration Pipeline",
    project3Description: "Deployment automation and migration flow that reduced configuration time and improved business continuity.",
    skillsLabel: "Skills",
    skillsList1: "API design and backend architecture",
    skillsList2: "Platform integration and API management",
    skillsList3: "Cloud services: AWS, Azure, GCP",
    skillsList4: "Automation, testing, and observability",
    toolsLabel: "Technologies",
    tool1: "C#, .NET, Python",
    tool2: "APIGee, Kubernetes, Docker",
    tool3: "AWS Lambda, Azure Functions, GCP Cloud Functions",
    tool4: "MongoDB, SQL Server, Redis, CI/CD",
    contactLabel: "Contact",
    contactHeadline: "Let's talk about your next project.",
    switchLabel: "ES",
  },
  es: {
    introPre: "Hola, soy Cristian Vega.",
    title: "Ingeniero Backend y de Integración en la Nube.",
    subtitle: "Desarrollo arquitecturas escalables, APIs seguras y pipelines de integración entre sistemas empresariales y servicios en la nube.",
    skills: "C# · Python · .NET · APIGee · AWS · Azure · GCP",
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Contacto"],
    aboutLabel: "Sobre mí",
    aboutIntro: "Soy un ingeniero con más de 5 años de experiencia en desarrollo backend y plataformas de integración en la nube. Me enfoco en soluciones robustas que conectan sistemas distribuidos y apoyan operaciones empresariales críticas.",
    aboutDetails: "He liderado integraciones de APIs, modernizado microservicios y diseñado procesos de despliegue que mejoran la estabilidad y reducen costos operativos.",
    experienceLabel: "Experiencia",
    inchcapeCompany: "Inchcape Digital",
    inchcapeRole: "Integrations Engineer",
    inchcapeDate: "2025 - Presente",
    inchcapeItem1: "Diseñé e implementé integraciones con APIGee para mejorar la interoperabilidad entre sistemas internos y proveedores externos.",
    inchcapeItem2: "Optimicé pipelines de datos en AWS y GCP, reduciendo tiempos de respuesta y fallas operativas.",
    inchcapeItem3: "Implementé monitoreo y alertas para asegurar la disponibilidad y el rendimiento de APIs críticas.",
    globantCompany: "Globant",
    globantRole: "Ssr .NET Engineer",
    globantDate: "2021 - 2025",
    globantItem1: "Construí microservicios con ASP.NET Core para soportar casos de uso de alta concurrencia.",
    globantItem2: "Desarrollé funciones en Azure y Lambdas en AWS para consolidar procesos de integración.",
    globantItem3: "Mejoré la calidad del código con pruebas automatizadas usando NUnit y Selenium.",
    projectsLabel: "Proyectos",
    project1Title: "Sistema de Telemetría Vehicular",
    project1Description: "Plataforma de monitoreo en tiempo real con backend .NET, aplicación React Native y base de datos distribuida en MongoDB.",
    project2Title: "Plataforma de Integración de APIs",
    project2Description: "Gateway centralizado para orquestar servicios internos y externos con APIGee y funciones serverless.",
    project3Title: "Pipeline de Migración a la Nube",
    project3Description: "Automatización de despliegues y migraciones que redujo tiempos de configuración y mejoró la continuidad de negocio.",
    skillsLabel: "Habilidades",
    skillsList1: "Diseño de APIs y arquitectura backend",
    skillsList2: "Integración entre plataformas y API management",
    skillsList3: "Servicios en la nube: AWS, Azure y GCP",
    skillsList4: "Automatización, pruebas y observabilidad",
    toolsLabel: "Tecnologías",
    tool1: "C#, .NET, Python",
    tool2: "APIGee, Kubernetes, Docker",
    tool3: "AWS Lambda, Azure Functions, GCP Cloud Functions",
    tool4: "MongoDB, SQL Server, Redis, CI/CD",
    contactLabel: "Contacto",
    contactHeadline: "Hablemos de tu próximo proyecto.",
    switchLabel: "EN",
  },
};

export default function Portfolio() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-10">
          <header className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t.introPre}</p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.subtitle}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-500">{t.skills}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {t.switchLabel}
              </button>
              <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
                <a href="#about" className="transition hover:text-white">{t.nav[0]}</a>
                <a href="#experience" className="transition hover:text-white">{t.nav[1]}</a>
                <a href="#projects" className="transition hover:text-white">{t.nav[2]}</a>
                <a href="#contact" className="transition hover:text-white">{t.nav[3]}</a>
              </nav>
            </div>
          </header>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <div className="space-y-10">
              <section id="about" className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{t.aboutLabel}</p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(255,255,255,0.02)]">
                  <p className="text-slate-300 leading-8">{t.aboutIntro}</p>
                  <p className="mt-4 text-slate-300 leading-8">{t.aboutDetails}</p>
                </div>
              </section>

              <section id="experience" className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{t.experienceLabel}</p>
                <div className="space-y-6">
                  <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{t.inchcapeCompany}</p>
                        <h2 className="mt-3 text-xl font-semibold text-white">{t.inchcapeRole}</h2>
                      </div>
                      <p className="text-sm text-slate-400">{t.inchcapeDate}</p>
                    </div>
                    <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
                      <li>{t.inchcapeItem1}</li>
                      <li>{t.inchcapeItem2}</li>
                      <li>{t.inchcapeItem3}</li>
                    </ul>
                  </article>

                  <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-500">{t.globantCompany}</p>
                        <h2 className="mt-3 text-xl font-semibold text-white">{t.globantRole}</h2>
                      </div>
                      <p className="text-sm text-slate-400">{t.globantDate}</p>
                    </div>
                    <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
                      <li>{t.globantItem1}</li>
                      <li>{t.globantItem2}</li>
                      <li>{t.globantItem3}</li>
                    </ul>
                  </article>
                </div>
              </section>

              <section id="projects" className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{t.projectsLabel}</p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{t.project1Title}</h3>
                      <p className="mt-2 text-slate-300 leading-7">{t.project1Description}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{t.project2Title}</h3>
                      <p className="mt-2 text-slate-300 leading-7">{t.project2Description}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{t.project3Title}</h3>
                      <p className="mt-2 text-slate-300 leading-7">{t.project3Description}</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{t.skillsLabel}</p>
                  <ul className="mt-6 space-y-3 text-slate-300">
                    <li>{t.skillsList1}</li>
                    <li>{t.skillsList2}</li>
                    <li>{t.skillsList3}</li>
                    <li>{t.skillsList4}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{t.toolsLabel}</p>
                  <div className="mt-6 grid gap-2 text-slate-300">
                    <span>{t.tool1}</span>
                    <span>{t.tool2}</span>
                    <span>{t.tool3}</span>
                    <span>{t.tool4}</span>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section id="contact" className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{t.contactLabel}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{t.contactHeadline}</h2>
              </div>
              <div className="space-y-2 text-slate-300">
                <p>crisvegarodri@gmail.com</p>
                <p>+57 320 477 7515</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
