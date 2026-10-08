"use client";

import { motion } from "motion/react";
import { FloatingPathsBackground } from "./components/ui/floating-paths";

function SmokeVideo({ src }: { src: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="relative overflow-hidden rounded-3xl bg-black"
    >
      {/* VIDEO */}
      <motion.video
        src={src}
        controls
        playsInline
        variants={{
          hidden: {
            opacity: 0,
            scale: 1.08,
            filter: "blur(18px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="aspect-video w-full object-cover"
      />

      {/* SMOKE */}
      <motion.div
        variants={{
          hidden: {
            opacity: 1,
          },
          visible: {
            opacity: 0,
          },
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute inset-0 overflow-hidden bg-black"
      >
        <motion.div
          variants={{
            hidden: {
              x: "-10%",
              y: "10%",
              scale: 1,
            },
            visible: {
              x: "-45%",
              y: "-20%",
              scale: 1.8,
            },
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute left-0 top-1/2 h-2/3 w-2/3 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        />

        <motion.div
          variants={{
            hidden: {
              x: "10%",
              y: "-10%",
              scale: 1,
            },
            visible: {
              x: "45%",
              y: "20%",
              scale: 1.8,
            },
          }}
          transition={{
            duration: 2.2,
            ease: "easeOut",
          }}
          className="absolute right-0 top-1/2 h-2/3 w-2/3 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        />

        <motion.div
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0.8,
            },
            visible: {
              scale: 2,
              opacity: 0,
            },
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808] text-white">

      {/* GLOBAL BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden">
        <FloatingPathsBackground
          position={-7}
          className="h-screen w-screen"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <section className="relative flex min-h-screen items-center justify-center px-6">

          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-7xl font-black tracking-[0.15em] sm:text-9xl"
            >
              <span className="bg-gradient-to-r from-white via-white/70 to-white/20 bg-clip-text text-transparent">
                DEPRIMM
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="mt-6 text-lg text-white/50"
            >
              Evoult
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-110 hover:bg-white/90"
            >
              VIEW
            </motion.button>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/30"
          >
            down
          </motion.div>

        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="min-h-screen px-6 py-32"
        >

          <div className="mx-auto max-w-6xl">

            {/* PROJECT TITLE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <p className="text-sm uppercase tracking-[0.4em] text-white/30">
                WORKS
              </p>

              <h2 className="mt-4 text-5xl font-bold sm:text-7xl">
                INVOKER
              </h2>

            </motion.div>


            {/* VIDEO 1 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="mt-24 grid items-center gap-12 lg:grid-cols-2"
            >

              <SmokeVideo src="/videos/video1.mp4" />

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                  01 / 02
                </p>

                <h3 className="mt-4 text-4xl font-bold sm:text-5xl">
                  VISUAL
                </h3>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50">
                  STATE LONELISS.
                </p>

              </div>

            </motion.div>


            {/* VIDEO 2 */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="mt-32 grid items-center gap-12 lg:grid-cols-2"
            >

              <div className="order-2 lg:order-1">

                <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                  02 / 02
                </p>

                <h3 className="mt-4 text-4xl font-bold sm:text-5xl">
                  FRAGMENT
                </h3>

                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50">
                  A VISUAL EXPLORATION OF FORM.
                </p>

              </div>

              <div className="order-1 lg:order-2">

                <SmokeVideo src="/videos/video2.mp4" />

              </div>

            </motion.div>

          </div>

        </section>


        {/* ABOUT */}
        <section className="flex min-h-screen items-center justify-center px-6 py-32">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center"
          >

            <p className="text-sm uppercase tracking-[0.4em] text-white/30">
              The test
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight sm:text-7xl">
              DEPRIMM
              <br />
              JUST A STATE.
            </h2>

            <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/40">
              A space built around visual experiments, digital aesthetics
              and ideas that exist somewhere between order and chaos.
            </p>

          </motion.div>

        </section>


        {/* FOOTER */}
        <footer className="border-t border-white/10 px-6 py-10">

          <div className="mx-auto flex max-w-6xl items-center justify-between">

            <span className="font-bold tracking-widest">
              DEPRIMM
            </span>

            <span className="text-sm text-white/30">
              © 2026
            </span>

          </div>

        </footer>

      </div>

    </main>
  );
}
