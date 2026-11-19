"use client";
import Image from "next/image";
import mockup1 from "@/public/mockup1.png";
import mockup2 from "@/public/mockup2.png";
import mockup3 from "@/public/mockup3.png";
import { useEffect, useState } from "react";
import { verProp } from "@/hooks/types";
import { getVer } from "@/hooks/action";

const URL_CHECKER_URL =
  "https://www.virustotal.com/gui/url/d68b17f7fb6784f954de2b08738439fefa273326cc3d78a323a032e22f3e7c64";

const screenshots = [
  { image: mockup1, title: "Your anime, all in one place", label: "HOME" },
  {
    image: mockup3,
    title: "Find a new world to get lost in",
    label: "DISCOVER",
  },
  { image: mockup2, title: "Stream seamlessly in HD", label: "NOW WATCHING" },
];

const features = [
  {
    icon: "✦",
    title: "Discover your next favorite",
    description:
      "Explore anime by what is trending, what is new, or the genres and stories you are in the mood for.",
  },
  {
    icon: "♡",
    title: "Keep a personal watchlist",
    description:
      "Save titles you want to watch and keep your anime picks organized in one easy-to-find place.",
  },
  {
    icon: "▶",
    title: "Pick up where you left off",
    description:
      "Browse recent episodes, find the episode you want, and return to a series without losing your place.",
  },
  {
    icon: "◎",
    title: "Explore a series further",
    description:
      "See related seasons and series, compare subtitle and dub options, and choose from available servers.",
  },
];

const faqs = [
  {
    question: "Do I need to create an account?",
    answer:
      "No. Anishie is designed for local use and does not require sign-up.",
  },
  {
    question: "What happens if I uninstall the app?",
    answer:
      "Data saved locally by the app may be removed when you uninstall it. Back up anything important before deleting the app.",
  },
  {
    question: "Can I use Anishie offline?",
    answer:
      "An internet connection is needed for online catalog information and streaming. Connect to Wi-Fi to use the app as intended.",
  },
  {
    question: "Where do I get the download?",
    answer:
      "Use a Download Anishie button on this page.",
  },
];

export default function Page() {
  const [isDownloaded, setDownloaded] = useState(false);
  const [isReleaseLoading, setReleaseLoading] = useState<boolean>(true);
  const [releaseInfo, setReleaseInfo] = useState<verProp | null>(null);

  useEffect(() => {
    getVer().then((data) => {
      (setReleaseInfo(data.ver), setReleaseLoading(false));
    });
  }, []);

  const handleDownload = async() => {
    try {
      if(!releaseInfo) return;
      const a = document.createElement("a");
      a.href = releaseInfo?.url;
      a.download = "";
      a.click();
      setDownloaded(true);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#090a12] text-[#f8f7ff] selection:bg-violet-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-linear(ellipse_at_78%_10%,rgba(124,92,252,0.18),transparent_36%),radial-linear(ellipse_at_5%_48%,rgba(131,231,244,0.07),transparent_32%)]" />

      <div className="relative z-10 mx-auto w-[calc(100%-2.5rem)] max-w-6xl sm:w-[calc(100%-4rem)]">
        <header className="flex min-h-18 items-center justify-between gap-4 border-b border-white/[0.07] sm:min-h-20">
          <a
            href="#top"
            aria-label="Anishie home"
            className="flex shrink-0 items-center gap-2.5"
          >
            <span className="grid size-8.5 place-items-center rounded-xl border border-violet-200/30 bg-linear-to-br from-violet-400 to-violet-700 text-[21px] font-black italic text-white shadow-lg shadow-violet-950/50">
              A
            </span>
            <span className="text-[19px] font-extrabold tracking-[-0.8px]">
              anishie
            </span>
            <span className="ml-0.5 rounded-md border border-violet-300/20 bg-violet-400/10 px-1.5 py-1 text-[8px] font-black tracking-[1px] text-violet-200">
              PLUS
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 text-xs font-semibold text-zinc-300 sm:flex"
          >
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#screenshots" className="transition hover:text-white">
              Screenshots
            </a>
            <a href="#about" className="transition hover:text-white">
              How it works
            </a>
            <a href="#privacy-safety" className="transition hover:text-white">
              Privacy & safety
            </a>
          </nav>

          <a
            href="#download"
            className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-violet-200/25 bg-violet-500/15 px-3.5 text-[10px] font-extrabold text-violet-100 transition hover:-translate-y-0.5 hover:bg-violet-500/25 sm:px-4 sm:text-xs"
          >
            Get the app <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section
          id="top"
          className="flex flex-col gap-8 pb-16 pt-12 sm:gap-10 sm:pb-20 sm:pt-16 lg:min-h-155 lg:flex-row lg:items-center lg:gap-10 lg:py-16"
        >
          <div className="relative z-10 lg:w-[47%] lg:shrink-0">
            <div className="inline-flex items-center gap-2 text-[9px] font-black tracking-[1.8px] text-violet-200">
              <span className="size-1.5 rounded-full bg-cyan-200 shadow-[0_0_13px_rgba(131,231,244,0.75)]" />
              YOUR NEXT ANIME OBSESSION
            </div>
            <h1 className="mb-4 mt-4 max-w-3xl text-[clamp(2.8rem,12vw,4.75rem)] font-black leading-[0.98] tracking-[-0.065em]">
              More anime.
              <br />
              <span className="bg-linear-to-r from-violet-200 via-violet-400 to-cyan-200 bg-clip-text text-transparent">
                More ways
              </span>
              <br />
              to get lost.
            </h1>
            <p className="max-w-117.5 text-sm leading-7 text-zinc-400">
              Discover your next favorite, keep your watchlist close, and jump
              back into the episodes you love all in one anime companion.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {isReleaseLoading || !releaseInfo ? (
                <div
                  role="status"
                  aria-label="Loading app download information"
                  className="flex min-h-12 w-48 animate-pulse items-center gap-3 rounded-[14px] border border-white/10 bg-white/6 px-5"
                >
                  <span className="size-4 rounded-full bg-violet-300/30" />
                  <span className="h-3 w-28 rounded-full bg-violet-200/20" />
                </div>
              ) : (
                <button
                  onClick={handleDownload}
                  disabled={isDownloaded}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[14px] bg-linear-to-r from-violet-400 to-violet-600 px-5 text-xs font-extrabold text-white shadow-lg shadow-violet-950/50 transition hover:-translate-y-0.5 hover:shadow-violet-900/60"
                >
                  <span aria-hidden="true" className="text-base">
                    ↓
                  </span>
                  {isDownloaded ? "Downloaded" : "Download Anishie"}
                </button>
              )}
              <a
                href="#screenshots"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-white/10 bg-white/4 px-5 text-xs font-bold text-zinc-100 transition hover:bg-white/8"
              >
                See the app <span aria-hidden="true">↘</span>
              </a>
            </div>

            <div className="mt-3 min-h-5" aria-live="polite">
              {isReleaseLoading || !releaseInfo ? (
                <div
                  role="status"
                  aria-label="Loading current app version"
                  className="h-3 w-36 animate-pulse rounded-full bg-white/10"
                />
              ) : (
                <p className="m-0 text-[9px] font-medium text-zinc-500">
                  Current version{" "}
                  <span className="ml-1 font-extrabold text-violet-200">
                    v{releaseInfo.version}
                  </span>
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-semibold text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-cyan-200">✓</span>No account required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="text-cyan-200">✓</span>Your list stays on your
                device
              </span>
            </div>
          </div>

          <div id="screenshots" className="relative min-w-0 lg:flex-1">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-[15%_5%_8%] rounded-full bg-violet-600/20 blur-[55px]"
            />
            <div className="relative -mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-5 pt-2 scrollbar-none [-webkit-overflow-scrolling:touch] sm:mx-0 sm:px-0 lg:justify-center lg:gap-0 lg:overflow-visible">
              {screenshots.map((shot, index) => (
                <article
                  key={shot.label}
                  className={`relative w-[46vw] min-w-35.5 max-w-51.25 shrink-0 snap-center transition duration-300 hover:-translate-y-1 sm:w-[31%] lg:w-[36%] lg:min-w-0 ${
                    index === 0
                      ? "lg:translate-y-5 lg:rotate-[-8deg]"
                      : index === 1
                        ? "z-10 lg:-translate-y-2 lg:scale-105"
                        : "lg:translate-y-5 lg:rotate-[8deg]"
                  }`}
                >
                  <div className="relative aspect-[0.51] overflow-hidden rounded-[23px] border border-white/20 bg-linear-to-br from-[#25263b] to-[#11121d] shadow-[0_20px_45px_rgba(0,0,0,0.38)] ring-1 ring-violet-300/5">
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 620px) 46vw, (max-width: 900px) 31vw, 205px"
                      className="object-contain pointer-events-none"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 px-0.5 pt-3">
                    <strong className="text-[10px] font-extrabold text-zinc-200">
                      {shot.title}
                    </strong>
                    <span className="text-[8px] font-black tracking-[1px] text-zinc-500">
                      {shot.label}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="features"
          className="border-t border-white/[0.07] py-14 sm:py-19"
        >
          <div className="mb-7 max-w-157.5">
            <span className="text-[8px] font-black uppercase tracking-[1.7px] text-violet-300">
              Made for your next watch
            </span>
            <h2 className="mb-2 mt-2 text-[clamp(1.8rem,7.5vw,2.65rem)] font-black leading-tight tracking-tighter">
              Your anime life, in sync with you.
            </h2>
            <p className="text-xs leading-6 text-zinc-400">
              Find something new, follow every episode, and keep your favorites
              organized without the clutter.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative min-h-44 overflow-hidden rounded-[19px] border border-white/8 bg-linear-to-br from-white/5.5 to-white/[0.018] p-5 transition hover:-translate-y-1 hover:border-violet-300/20"
              >
                <div
                  aria-hidden="true"
                  className="absolute -bottom-14 -right-10 size-32 rounded-full border border-violet-300/10 transition group-hover:scale-110"
                />
                <div className="relative grid size-9 place-items-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-[17px] text-violet-200">
                  {feature.icon}
                </div>
                <h3 className="relative mb-1.5 mt-4 text-sm font-extrabold text-violet-50">
                  {feature.title}
                </h3>
                <p className="relative max-w-sm text-[10px] leading-[1.7] text-zinc-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="border-t border-white/[0.07] py-14 sm:py-19"
        >
          <div className="grid gap-5 rounded-[22px] border border-cyan-200/15 bg-linear-to-br from-cyan-200/[0.07] via-violet-400/[0.07] to-white/2.5 p-5 sm:grid-cols-[1.1fr_0.9fr] sm:gap-8 sm:p-7">
            <div>
              <span className="text-[8px] font-black uppercase tracking-[1.7px] text-cyan-200">
                Simple by design
              </span>
              <h2 className="mb-2 mt-2 text-xl font-extrabold tracking-tight">
                No sign-up. Your app, your device.
              </h2>
              <p className="text-[10px] leading-[1.8] text-zinc-300/80">
                Anishie does not request sensitive device permissions such as
                contacts, microphone, or location. No sign-up or social login is
                required, so you do not connect your social accounts or grant
                Anishie access to your social profiles. Your profile and saved
                app data stay on your device and may be removed if you uninstall
                the app. Streaming and online catalog details still need an
                internet connection.
              </p>
            </div>
            <div className="grid content-center gap-3">
              <div className="flex items-start gap-2.5 text-[10px] leading-relaxed text-zinc-200">
                <span className="font-black text-cyan-200">01</span>Open Anishie
                no account setup needed.
              </div>
              <div className="flex items-start gap-2.5 text-[10px] leading-relaxed text-zinc-200">
                <span className="font-black text-cyan-200">02</span>Discover
                anime and save titles to your list.
              </div>
              <div className="flex items-start gap-2.5 text-[10px] leading-relaxed text-zinc-200">
                <span className="font-black text-cyan-200">03</span>Connect to
                Wi-Fi to browse and stream.
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="pb-14 pt-2 sm:pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-violet-300/25 bg-[radial-linear(ellipse_at_100%_0%,rgba(124,92,252,0.28),transparent_48%),linear-linear(135deg,#171625,#10111a_76%)] p-6 sm:p-9">
            <span className="text-[8px] font-black uppercase tracking-[1.7px] text-violet-200">
              Your next story is waiting
            </span>
            <h2 className="mb-2 mt-2 max-w-xl text-[clamp(1.8rem,8vw,2.7rem)] font-black leading-tight tracking-[-0.055em]">
              Take Anishie with you.
            </h2>
            <p className="max-w-lg text-[11px] leading-6 text-zinc-400">
              Download the app and make room for your next favorite anime.
            </p>
            {isReleaseLoading || !releaseInfo ? (
              <div
                role="status"
                aria-label="Loading app download information"
                className="mt-5 flex min-h-12 w-48 animate-pulse items-center gap-3 rounded-[14px] border border-white/10 bg-white/6 px-5"
              >
                <span className="size-4 rounded-full bg-violet-300/30" />
                <span className="h-3 w-28 rounded-full bg-violet-200/20" />
              </div>
            ) : (
              <button
                onClick={handleDownload}
                disabled={isDownloaded}
                className="mt-5 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[14px] bg-linear-to-r from-violet-400 to-violet-600 px-5 text-xs font-extrabold text-white shadow-lg shadow-violet-950/50 transition hover:-translate-y-0.5"
              >
                <span aria-hidden="true" className="text-base">
                  ↓
                </span>
                {isDownloaded ? "Downloaded" : "Download Anishie"}
              </button>
            )}

            <div className="mt-3 min-h-5" aria-live="polite">
              {isReleaseLoading || !releaseInfo ? (
                <div
                  role="status"
                  aria-label="Loading current app version"
                  className="h-3 w-36 animate-pulse rounded-full bg-white/10"
                />
              ) : (
                <p className="m-0 text-[9px] font-medium text-zinc-500">
                  Current version{" "}
                  <span className="ml-1 font-extrabold text-violet-200">
                    v{releaseInfo.version}
                  </span>
                </p>
              )}
            </div>
          </div>
        </section>

        <section
          id="privacy-safety"
          className="border-t border-white/[0.07] py-14 sm:py-19"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[20px] border border-cyan-200/15 bg-linear-to-br from-cyan-200/[0.07] to-white/2.5 p-5 sm:p-6">
              <div
                className="mb-4 grid size-10 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/10 text-lg text-cyan-100"
                aria-hidden="true"
              >
                ◈
              </div>
              <span className="text-[8px] font-black uppercase tracking-[1.7px] text-cyan-200">
                Your privacy matters
              </span>
              <h2 className="mb-2 mt-2 text-xl font-extrabold tracking-tight">
                No sign-up. No social access.
              </h2>
              <p className="mb-0 text-[10px] leading-[1.8] text-zinc-300/80">
                Anishie does not ask for sensitive device permissions, account
                sign-up, or social-media login. We do not connect to your social
                profiles or request access to them. An internet connection is
                still needed for online catalog information and streaming.
              </p>
              <p className="mb-0 mt-3 text-[9px] leading-[1.7] text-zinc-500">
                Local app data may be deleted when you uninstall Anishie.
              </p>
            </article>

            <article className="rounded-[20px] border border-violet-300/15 bg-linear-to-br from-violet-400/8 to-white/2.5 p-5 sm:p-6">
              <div
                className="mb-4 grid size-10 place-items-center rounded-xl border border-violet-300/20 bg-violet-400/10 text-lg text-violet-100"
                aria-hidden="true"
              >
                ✓
              </div>
              <span className="text-[8px] font-black uppercase tracking-[1.7px] text-violet-200">
                Check before you install
              </span>
              <h2 className="mb-2 mt-2 text-xl font-extrabold tracking-tight">
                Verify the download link.
              </h2>
              <p className="mb-4 text-[10px] leading-[1.8] text-zinc-300/80">
                Want an independent check? Open your chosen URL-scanning service
                and paste in the official Anishie download link to review its
                report.
              </p>
              {URL_CHECKER_URL ? (
                <a
                  href={URL_CHECKER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-violet-200/20 bg-violet-400/10 px-4 text-[10px] font-extrabold text-violet-100 transition hover:bg-violet-400/20"
                >
                  Open URL checker <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="inline-flex min-h-10 items-center rounded-xl border border-white/10 bg-white/4 px-4 text-[9px] font-bold text-zinc-400">
                  Add your trusted checker URL to enable this button
                </span>
              )}
              <p className="mb-0 mt-3 text-[9px] leading-[1.7] text-zinc-500">
                A scan can help assess a link, but no scanner can guarantee a
                file is completely risk-free. Always check that the download
                comes from the official Anishie source.
              </p>
            </article>
          </div>
        </section>

        <section
          aria-labelledby="faq-title"
          className="border-t border-white/[0.07] py-14 sm:py-19"
        >
          <div className="mb-6 max-w-xl">
            <span className="text-[8px] font-black uppercase tracking-[1.7px] text-violet-300">
              A few quick answers
            </span>
            <h2
              id="faq-title"
              className="mb-0 mt-2 text-[clamp(1.8rem,7.5vw,2.65rem)] font-black tracking-tighter"
            >
              Good to know.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-[15px] border border-white/8 bg-white/[0.035] p-4"
              >
                <h3 className="mb-2 text-[11px] font-extrabold text-zinc-100">
                  {faq.question}
                </h3>
                <p className="m-0 text-[9px] leading-[1.7] text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/[0.07] py-6 text-[8px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-extrabold text-zinc-300">
            anishie{" "}
            <span className="ml-1 rounded-md bg-violet-400/10 px-1.5 py-1 text-[7px] tracking-[1px] text-violet-200">
              PLUS
            </span>
          </span>
          <span>Made for anime fans. Connect to the internet to stream.</span>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#screenshots" className="transition hover:text-white">
              Screenshots
            </a>
            <a href="#download" className="transition hover:text-white">
              Download
            </a>
          </nav>
        </footer>
      </div>
    </main>
  );
}
