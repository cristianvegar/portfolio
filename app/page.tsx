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
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold">Cristian Vega</h1>
        <p className="text-xl mt-4">
          Backend & Cloud Integration Engineer
        </p>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          5+ years of experience designing scalable APIs, cloud integrations and distributed systems across AWS, Azure and GCP.
        </p>
        <p className="mt-2 text-gray-500">
          C# | Python | .NET | APIGee | React Native | MongoDB
        </p>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          Integration Engineer with strong experience in backend development and API ecosystems. I specialize in designing,
          implementing, and maintaining scalable integrations between enterprise systems and third-party services.
        </p>
        <p className="text-gray-300 mt-3">
          Proven experience working with microservices architectures, cloud platforms, and real-time data processing. Strong
          background in troubleshooting, performance optimization, and secure API design.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>

        <div className="mb-6">
          <h3 className="font-bold">Integrations Engineer — Inchcape Digital</h3>
          <p className="text-gray-400 text-sm">2025 - Present</p>
          <ul className="text-gray-300 mt-2 list-disc list-inside">
            <li>Designed and implemented API integrations using APIGee</li>
            <li>Reduced system downtime through monitoring and troubleshooting</li>
            <li>Implemented authentication, authorization and validation best practices</li>
            <li>Built POC using Google Cloud Logging to reduce costs and improve persistence</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-bold">Ssr .NET Engineer — Globant</h3>
          <p className="text-gray-400 text-sm">2021 - 2025</p>
          <ul className="text-gray-300 mt-2 list-disc list-inside">
            <li>Developed microservices using ASP.NET Core</li>
            <li>Worked with AWS Lambdas and Azure Functions</li>
            <li>Implemented automated testing with Selenium and NUnit</li>
            <li>Applied DDD principles in distributed systems</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="mb-8 border border-gray-700 p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Vehicle Telemetry & Monitoring System</h3>
          <p className="text-gray-400 mt-2">
            Distributed system designed to monitor vehicle data in real-time.
          </p>
          <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
            <li>React Native mobile application</li>
            <li>.NET backend with minimal APIs</li>
            <li>MongoDB distributed database</li>
          </ul>
          <p className="text-gray-500 mt-3 text-sm">
            Focused on scalability, real-time processing and distributed data handling.
          </p>
        </div>

        <div className="mb-8 border border-gray-700 p-6 rounded-2xl">
          <h3 className="text-xl font-bold">API Integration Platform</h3>
          <p className="text-gray-400 mt-2">
            Centralized integration layer to connect internal systems with external services.
          </p>
          <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
            <li>APIGee API Gateway</li>
            <li>Cloud Functions (Python)</li>
            <li>Secure API design</li>
          </ul>
          <p className="text-gray-500 mt-3 text-sm">
            Designed for reliability, security and maintainability in enterprise environments.
          </p>
        </div>
      </section>

      {/* ENGINEERING APPROACH */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Engineering Approach</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>Designing scalable and maintainable APIs</li>
          <li>Applying Domain-Driven Design (DDD) in distributed systems</li>
          <li>Building cloud-native and event-driven architectures</li>
          <li>Ensuring security, observability and performance in integrations</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <h3 className="font-bold">Languages</h3>
            <p>C#, Python, JavaScript, SQL</p>
          </div>
          <div>
            <h3 className="font-bold">Cloud</h3>
            <p>AWS, Azure, GCP</p>
          </div>
          <div>
            <h3 className="font-bold">Backend</h3>
            <p>.NET Core, ASP.NET, APIs</p>
          </div>
          <div>
            <h3 className="font-bold">Integration</h3>
            <p>APIGee, API Gateway, Microservices</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">crisvegarodri@gmail.com</p>
        <p className="text-gray-400">+57 320 477 7515</p>
      </section>
    </div>
  );
}
