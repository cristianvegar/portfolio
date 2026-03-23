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

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* HERO */}
      <section className="p-10 text-center">
        <h1 className="text-4xl font-bold">Cristian Orlando Vega</h1>
        <p className="text-xl mt-4">
          Backend & Cloud Integration Engineer
        </p>
        <p className="mt-2 text-gray-400">
          Python | .NET | Apigee | GCP | Distributed Systems
        </p>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300">
          Engineer specialized in backend systems, API integrations, and cloud-based architectures.
          Experienced in building scalable solutions using Python and .NET, with strong knowledge
          in distributed systems and real-time data processing.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        {/* PROJECT 1 */}
        <div className="mb-8 border border-gray-700 p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Vehicle Telemetry & Monitoring System</h3>
          <p className="text-gray-400 mt-2">
            Real-time monitoring system for vehicle data including speed, temperature, and diagnostics.
          </p>
          <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
            <li>React Native mobile app</li>
            <li>.NET backend (Minimal API)</li>
            <li>MongoDB distributed database</li>
          </ul>
        </div>

        {/* PROJECT 2 */}
        <div className="mb-8 border border-gray-700 p-6 rounded-2xl">
          <h3 className="text-xl font-bold">API Integration Platform</h3>
          <p className="text-gray-400 mt-2">
            Unified multiple APIs into a single gateway using Apigee and cloud integrations.
          </p>
          <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
            <li>Apigee API Gateway</li>
            <li>Google Application Integration</li>
            <li>Python Cloud Functions</li>
          </ul>
        </div>

        {/* PROJECT 3 */}
        <div className="border border-gray-700 p-6 rounded-2xl">
          <h3 className="text-xl font-bold">Event-Driven Cloud System</h3>
          <p className="text-gray-400 mt-2">
            Event-based processing system built on GCP using serverless architecture.
          </p>
          <ul className="mt-3 text-sm text-gray-300 list-disc list-inside">
            <li>Cloud Functions (Python)</li>
            <li>Event-driven architecture</li>
            <li>Real-time processing</li>
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-300">
          <div>
            <h3 className="font-bold">Backend</h3>
            <p>Python, C#, .NET</p>
          </div>
          <div>
            <h3 className="font-bold">Cloud</h3>
            <p>GCP, Cloud Functions</p>
          </div>
          <div>
            <h3 className="font-bold">Integration</h3>
            <p>Apigee, API Design</p>
          </div>
          <div>
            <h3 className="font-bold">Databases</h3>
            <p>MongoDB</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">tuemail@gmail.com</p>
        <p className="text-gray-400">linkedin.com/in/tuusuario</p>
      </section>

    </div>
  );
}