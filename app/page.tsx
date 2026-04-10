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

import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-10">
          <header className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Hi, I'm Cristian Vega.</p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Backend & Cloud Integration Engineer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Building reliable API ecosystems, cloud-native integrations and distributed services for enterprise teams.
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-500">
                C# · Python · .NET · APIGee · AWS · Azure · GCP
              </p>
            </div>

            <nav className="flex flex-wrap gap-4 text-sm text-slate-400">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </header>

          <section className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start">
            <div className="space-y-10">
              <section id="about" className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">About</p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(255,255,255,0.02)]">
                  <p className="text-slate-300 leading-8">
                    I specialize in backend architecture, API design, and cloud integration for high-growth companies. My work focuses on secure, scalable services that connect distributed systems and improve developer velocity.
                  </p>
                  <p className="mt-4 text-slate-300 leading-8">
                    I have over 5 years of experience delivering enterprise-grade solutions using .NET, Python, and API management platforms while driving observability, reliability and cost efficiency.
                  </p>
                </div>
              </section>

              <section id="work" className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Selected Work</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">System</p>
                    <h2 className="mt-4 text-xl font-semibold text-white">Telemetry & Monitoring</h2>
                    <p className="mt-3 text-slate-300 leading-7">
                      Real-time vehicle analytics with a .NET backend, React Native client and MongoDB persistence.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Platform</p>
                    <h2 className="mt-4 text-xl font-semibold text-white">API Integration Layer</h2>
                    <p className="mt-3 text-slate-300 leading-7">
                      Secure, centralized gateway for internal and external services using APIGee and cloud functions.
                    </p>
                  </div>
                </div>
              </section>

              <section id="projects" className="space-y-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Projects</p>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Cloud Migration Pipeline</h3>
                      <p className="mt-2 text-slate-300 leading-7">
                        Automated deployment and integration flow for cloud services that reduced configuration overhead and improved release cadence.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Secure API Mesh</h3>
                      <p className="mt-2 text-slate-300 leading-7">
                        Designed an authentication-first API mesh for distributed microservices with monitoring and centralized observability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Focus</p>
                  <ul className="mt-6 space-y-4 text-slate-300">
                    <li>API design & integration</li>
                    <li>Cloud-native engineering</li>
                    <li>Distributed systems</li>
                    <li>Observability & reliability</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Tools</p>
                  <div className="mt-6 grid gap-2 text-slate-300">
                    <span>C#, .NET, Python</span>
                    <span>AWS, Azure, GCP</span>
                    <span>APIGee, Kubernetes, Docker</span>
                    <span>MongoDB, SQL, CI/CD</span>
                  </div>
                </div>
              </div>
            </aside>
          </section>

          <section id="contact" className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Let's build something reliable together.</h2>
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
