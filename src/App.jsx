import { useEffect } from "react";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    window.DIVISIONS = {
      ঢাকা: [
        "ঢাকা",
        "গাজীপুর",
        "নারায়ণগঞ্জ",
        "টাঙ্গাইল",
        "কিশোরগঞ্জ",
        "মানিকগঞ্জ",
        "মুন্সিগঞ্জ",
        "নরসিংদী",
        "ফরিদপুর",
        "গোপালগঞ্জ",
        "মাদারীপুর",
        "রাজবাড়ী",
        "শরীয়তপুর",
      ],
      চট্টগ্রাম: [
        "চট্টগ্রাম",
        "কক্সবাজার",
        "কুমিল্লা",
        "ফেনী",
        "নোয়াখালী",
        "লক্ষ্মীপুর",
        "চাঁদপুর",
        "ব্রাহ্মণবাড়িয়া",
        "রাঙামাটি",
        "খাগড়াছড়ি",
        "বান্দরবান",
      ],
      রাজশাহী: [
        "রাজশাহী",
        "বগুড়া",
        "পাবনা",
        "সিরাজগঞ্জ",
        "নাটোর",
        "নওগাঁ",
        "চাঁপাইনবাবগঞ্জ",
        "জয়পুরহাট",
      ],
      খুলনা: [
        "খুলনা",
        "যশোর",
        "সাতক্ষীরা",
        "বাগেরহাট",
        "কুষ্টিয়া",
        "ঝিনাইদহ",
        "মাগুরা",
        "নড়াইল",
        "চুয়াডাঙ্গা",
        "মেহেরপুর",
      ],
      বরিশাল: ["বরিশাল", "পটুয়াখালী", "ভোলা", "পিরোজপুর", "বরগুনা", "ঝালকাঠি"],
      সিলেট: ["সিলেট", "মৌলভীবাজার", "হবিগঞ্জ", "সুনামগঞ্জ"],
      রংপুর: [
        "রংপুর",
        "দিনাজপুর",
        "কুড়িগ্রাম",
        "গাইবান্ধা",
        "লালমনিরহাট",
        "নীলফামারী",
        "পঞ্চগড়",
        "ঠাকুরগাঁও",
      ],
      ময়মনসিংহ: ["ময়মনসিংহ", "জামালপুর", "নেত্রকোনা", "শেরপুর"],
    };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        মূল কনটেন্টে যান
      </a>
      <TopBar />

      <Header />

      <nav
        className="sticky top-[env(safe-area-inset-top,0px)] z-30 border-b border-line bg-white/95 shadow-sm backdrop-blur"
        aria-label="প্রধান বিভাগ"
      >
        <div className="container flex items-center gap-2">
          <a
            href="index.html"
            className="hidden shrink-0 py-3 font-logo text-lg text-brand-600 md:block"
            data-sticky-logo
            aria-label="প্রথম পাতা"
          >
            প্র
          </a>
          <ul className="no-scrollbar flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto whitespace-nowrap text-[0.95rem] font-medium">
            <li>
              <a
                href="index.html"
                className="relative block px-3 py-3 hover:text-brand-600 text-brand-600 after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-brand-600"
                aria-current="page"
              >
                প্রথম পাতা
              </a>
            </li>
            <li>
              <a
                href="latest.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                সর্বশেষ
              </a>
            </li>
            <li>
              <a
                href="bangladesh.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                বাংলাদেশ
              </a>
            </li>
            <li>
              <a
                href="politics.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                রাজনীতি
              </a>
            </li>
            <li>
              <a
                href="world.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                বিশ্ব
              </a>
            </li>
            <li>
              <a
                href="business.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                বাণিজ্য
              </a>
            </li>
            <li>
              <a
                href="opinion.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                মতামত
              </a>
            </li>
            <li>
              <a
                href="sports.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                খেলা
              </a>
            </li>
            <li>
              <a
                href="entertainment.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                বিনোদন
              </a>
            </li>
            <li>
              <a
                href="lifestyle.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                জীবনযাপন
              </a>
            </li>
            <li>
              <a
                href="technology.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                প্রযুক্তি
              </a>
            </li>
            <li>
              <a
                href="education.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                শিক্ষা
              </a>
            </li>
            <li>
              <a
                href="health.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                স্বাস্থ্য
              </a>
            </li>
            <li>
              <a
                href="jobs.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                চাকরি
              </a>
            </li>
            <li>
              <a
                href="videos.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                ভিডিও
              </a>
            </li>
            <li>
              <a
                href="photos.html"
                className="relative block px-3 py-3 hover:text-brand-600"
              >
                ছবি
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div
        id="search-panel"
        className="fixed inset-0 z-50 hidden bg-black/60 backdrop-blur-sm"
        data-search-panel
      >
        <div className="bg-white">
          <form
            action="search.html"
            className="container flex items-center gap-3 py-6"
            role="search"
          >
            <svg
              className="size-6 text-muted"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <label htmlFor="top-search" className="sr-only">
              খুঁজুন
            </label>
            <input
              id="top-search"
              name="q"
              type="search"
              placeholder="কী খুঁজতে চান? যেমন: ঘূর্ণিঝড়, ক্রিকেট…"
              className="min-w-0 flex-1 border-0 bg-transparent text-xl outline-none placeholder:text-muted/70 md:text-2xl"
              autoComplete="off"
            />
            <button
              type="button"
              className="inline-grid size-10 place-items-center rounded-full hover:bg-paper"
              data-search-close
              aria-label="বন্ধ করুন"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </form>
          <div className="container flex flex-wrap items-center gap-2 pb-6 text-sm">
            <span className="text-muted">জনপ্রিয়:</span>
            <a
              href="search.html?q=%E0%A6%98%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%BF%E0%A6%9D%E0%A6%A1%E0%A6%BC"
              className="rounded-full bg-paper px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
            >
              ঘূর্ণিঝড়
            </a>
            <a
              href="search.html?q=%E0%A6%8F%E0%A6%B8%E0%A6%8F%E0%A6%B8%E0%A6%B8%E0%A6%BF%20%E0%A6%AB%E0%A6%B2"
              className="rounded-full bg-paper px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
            >
              এসএসসি ফল
            </a>
            <a
              href="search.html?q=%E0%A6%A1%E0%A7%87%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A7%81"
              className="rounded-full bg-paper px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
            >
              ডেঙ্গু
            </a>
            <a
              href="search.html?q=%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8"
              className="rounded-full bg-paper px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
            >
              নির্বাচন
            </a>
            <a
              href="search.html?q=%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%9F"
              className="rounded-full bg-paper px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
            >
              ক্রিকেট
            </a>
            <a
              href="search.html?q=%E0%A6%AE%E0%A7%87%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B2"
              className="rounded-full bg-paper px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
            >
              মেট্রোরেল
            </a>
          </div>
        </div>
      </div>

      <div
        id="drawer"
        className="fixed inset-0 z-50 hidden"
        data-drawer
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" data-drawer-close></div>
        <div
          className="absolute inset-y-0 left-0 flex w-[min(22rem,88vw)] flex-col overflow-y-auto bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-label="মেনু"
        >
          <div className="flex items-center justify-between border-b border-line p-4">
            <a
              href="index.html"
              className="inline-flex items-center gap-2 font-logo text-2xl leading-none text-ink"
              aria-label="দৈনিক প্রভাত — প্রথম পাতা"
            >
              <span className="relative inline-grid size-[1.1em] place-items-center rounded-full bg-brand-600 text-white text-[0.55em]">
                প্র
              </span>
              <span>দৈনিক প্রভাত</span>
            </a>
            <button
              type="button"
              className="inline-grid size-10 place-items-center rounded-full hover:bg-paper"
              data-drawer-close
              aria-label="মেনু বন্ধ করুন"
            >
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <form
            action="search.html"
            className="border-b border-line p-4"
            role="search"
          >
            <label className="flex items-center gap-2 rounded border border-line px-3 py-2 focus-within:border-brand-600">
              <svg
                className="size-4 text-muted"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                name="q"
                type="search"
                placeholder="খুঁজুন"
                className="min-w-0 flex-1 border-0 bg-transparent text-sm outline-none"
              />
            </label>
          </form>
          <ul className="flex-1 divide-y divide-line">
            <li>
              <a
                href="latest.html"
                className="block px-4 py-3 font-medium hover:bg-paper hover:text-brand-600"
              >
                সর্বশেষ
              </a>
            </li>
            <li>
              <a
                href="videos.html"
                className="block px-4 py-3 font-medium hover:bg-paper hover:text-brand-600"
              >
                ভিডিও
              </a>
            </li>
            <li>
              <a
                href="photos.html"
                className="block px-4 py-3 font-medium hover:bg-paper hover:text-brand-600"
              >
                ছবি
              </a>
            </li>

            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="bangladesh.html" className="hover:text-brand-600">
                    বাংলাদেশ
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="bangladesh.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      রাজধানী
                    </a>
                  </li>
                  <li>
                    <a
                      href="bangladesh.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      জেলা
                    </a>
                  </li>
                  <li>
                    <a
                      href="bangladesh.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      অপরাধ
                    </a>
                  </li>
                  <li>
                    <a
                      href="bangladesh.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      পরিবেশ
                    </a>
                  </li>
                  <li>
                    <a
                      href="bangladesh.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      দুর্ঘটনা
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="politics.html" className="hover:text-brand-600">
                    রাজনীতি
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="politics.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      দল
                    </a>
                  </li>
                  <li>
                    <a
                      href="politics.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      নির্বাচন
                    </a>
                  </li>
                  <li>
                    <a
                      href="politics.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      সংসদ
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="world.html" className="hover:text-brand-600">
                    বিশ্ব
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="world.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ভারত
                    </a>
                  </li>
                  <li>
                    <a
                      href="world.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      চীন
                    </a>
                  </li>
                  <li>
                    <a
                      href="world.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      যুক্তরাষ্ট্র
                    </a>
                  </li>
                  <li>
                    <a
                      href="world.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      মধ্যপ্রাচ্য
                    </a>
                  </li>
                  <li>
                    <a
                      href="world.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ইউরোপ
                    </a>
                  </li>
                  <li>
                    <a
                      href="world.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      এশিয়া
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="business.html" className="hover:text-brand-600">
                    বাণিজ্য
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="business.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      অর্থনীতি
                    </a>
                  </li>
                  <li>
                    <a
                      href="business.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ব্যাংক
                    </a>
                  </li>
                  <li>
                    <a
                      href="business.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      শেয়ারবাজার
                    </a>
                  </li>
                  <li>
                    <a
                      href="business.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      বাজার
                    </a>
                  </li>
                  <li>
                    <a
                      href="business.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      বিশ্ববাণিজ্য
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="opinion.html" className="hover:text-brand-600">
                    মতামত
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="opinion.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      সম্পাদকীয়
                    </a>
                  </li>
                  <li>
                    <a
                      href="opinion.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      কলাম
                    </a>
                  </li>
                  <li>
                    <a
                      href="opinion.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      সাক্ষাৎকার
                    </a>
                  </li>
                  <li>
                    <a
                      href="opinion.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      চিঠিপত্র
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="sports.html" className="hover:text-brand-600">
                    খেলা
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="sports.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ক্রিকেট
                    </a>
                  </li>
                  <li>
                    <a
                      href="sports.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ফুটবল
                    </a>
                  </li>
                  <li>
                    <a
                      href="sports.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      টেনিস
                    </a>
                  </li>
                  <li>
                    <a
                      href="sports.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      অন্য খেলা
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="entertainment.html" className="hover:text-brand-600">
                    বিনোদন
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="entertainment.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ঢালিউড
                    </a>
                  </li>
                  <li>
                    <a
                      href="entertainment.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      টেলিভিশন
                    </a>
                  </li>
                  <li>
                    <a
                      href="entertainment.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ওটিটি
                    </a>
                  </li>
                  <li>
                    <a
                      href="entertainment.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      গান
                    </a>
                  </li>
                  <li>
                    <a
                      href="entertainment.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      বলিউড
                    </a>
                  </li>
                  <li>
                    <a
                      href="entertainment.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      হলিউড
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="lifestyle.html" className="hover:text-brand-600">
                    জীবনযাপন
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="lifestyle.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ফ্যাশন
                    </a>
                  </li>
                  <li>
                    <a
                      href="lifestyle.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      রেসিপি
                    </a>
                  </li>
                  <li>
                    <a
                      href="lifestyle.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ভ্রমণ
                    </a>
                  </li>
                  <li>
                    <a
                      href="lifestyle.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      সম্পর্ক
                    </a>
                  </li>
                  <li>
                    <a
                      href="lifestyle.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      রূপচর্চা
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="technology.html" className="hover:text-brand-600">
                    প্রযুক্তি
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="technology.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      গ্যাজেট
                    </a>
                  </li>
                  <li>
                    <a
                      href="technology.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      অ্যাপ
                    </a>
                  </li>
                  <li>
                    <a
                      href="technology.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      সাইবার নিরাপত্তা
                    </a>
                  </li>
                  <li>
                    <a
                      href="technology.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      স্টার্টআপ
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="education.html" className="hover:text-brand-600">
                    শিক্ষা
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="education.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      পরীক্ষা
                    </a>
                  </li>
                  <li>
                    <a
                      href="education.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ভর্তি
                    </a>
                  </li>
                  <li>
                    <a
                      href="education.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      উচ্চশিক্ষা
                    </a>
                  </li>
                  <li>
                    <a
                      href="education.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      বৃত্তি
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="health.html" className="hover:text-brand-600">
                    স্বাস্থ্য
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="health.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      রোগবালাই
                    </a>
                  </li>
                  <li>
                    <a
                      href="health.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      পুষ্টি
                    </a>
                  </li>
                  <li>
                    <a
                      href="health.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      মানসিক স্বাস্থ্য
                    </a>
                  </li>
                  <li>
                    <a
                      href="health.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      পরামর্শ
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium hover:bg-paper [&::-webkit-details-marker]:hidden">
                  <a href="jobs.html" className="hover:text-brand-600">
                    চাকরি
                  </a>
                  <span className="text-muted transition group-open:rotate-180">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <ul className="grid grid-cols-2 gap-1 bg-paper px-4 py-2 text-sm">
                  <li>
                    <a
                      href="jobs.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      সরকারি চাকরি
                    </a>
                  </li>
                  <li>
                    <a
                      href="jobs.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      বেসরকারি চাকরি
                    </a>
                  </li>
                  <li>
                    <a
                      href="jobs.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      ক্যারিয়ার
                    </a>
                  </li>
                  <li>
                    <a
                      href="jobs.html"
                      className="block py-1.5 text-ink/75 hover:text-brand-600"
                    >
                      প্রস্তুতি
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="epaper.html"
                className="block px-4 py-3 font-medium hover:bg-paper hover:text-brand-600"
              >
                ই-পেপার
              </a>
            </li>
            <li>
              <a
                href="my-area.html"
                className="block px-4 py-3 font-medium hover:bg-paper hover:text-brand-600"
              >
                আমার এলাকা
              </a>
            </li>
            <li>
              <a
                href="archive.html"
                className="block px-4 py-3 font-medium hover:bg-paper hover:text-brand-600"
              >
                আর্কাইভ
              </a>
            </li>
          </ul>
          <div className="border-t border-line p-4">
            <div className="flex items-center gap-1.5">
              <a
                href="#"
                className="inline-grid size-8 place-items-center rounded-full hover:bg-black/10"
                aria-label="facebook"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V22z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-grid size-8 place-items-center rounded-full hover:bg-black/10"
                aria-label="x"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h4.5L20 20h-4.5zM20 4l-6.5 7.2M4 20l6.5-7.2" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-grid size-8 place-items-center rounded-full hover:bg-black/10"
                aria-label="youtube"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
                  <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-grid size-8 place-items-center rounded-full hover:bg-black/10"
                aria-label="instagram"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-grid size-8 place-items-center rounded-full hover:bg-black/10"
                aria-label="linkedin"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <BreakingNews />

      <main id="main">
        <div className="container space-y-12 py-6">
          <div className="hidden md:block">
            <div
              className="grid h-[90px] place-items-center rounded border border-dashed border-line bg-paper text-xs tracking-widest text-muted"
              role="complementary"
              aria-label="বিজ্ঞাপন"
            >
              বিজ্ঞাপন ৯৭০×৯০
            </div>
          </div>

          <section
            className="grid gap-6 lg:grid-cols-12"
            aria-label="প্রধান খবর"
          >
            <div className="lg:col-span-6">
              <article className="group">
                <a href="news/2.html" className="block overflow-hidden rounded">
                  <img
                    src="https://picsum.photos/seed/np-2/1200/675"
                    alt="উপকূলে ঘূর্ণিঝড়ের সতর্কসংকেত, প্রস্তুত চার হাজার আশ্রয়কেন্দ্র"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h2 className="mt-3 font-headline text-2xl font-bold leading-snug md:text-[1.9rem]">
                  <a href="news/2.html" className="hover:text-brand-600">
                    <span className="me-1.5 inline-flex items-center gap-1 rounded bg-brand-600 px-1.5 py-0.5 align-middle text-[11px] font-semibold text-white">
                      <span className="size-1.5 animate-pulse rounded-full bg-white"></span>
                      লাইভ
                    </span>
                    উপকূলে ঘূর্ণিঝড়ের সতর্কসংকেত, প্রস্তুত চার হাজার
                    আশ্রয়কেন্দ্র
                  </a>
                </h2>
                <p className="mt-2 text-base leading-relaxed text-ink/75">
                  চট্টগ্রাম, কক্সবাজারসহ উপকূলীয় জেলাগুলোকে তিন নম্বর
                  সতর্কসংকেত দেখাতে বলেছে আবহাওয়া অধিদপ্তর।
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href="bangladesh.html"
                    className="text-xs font-semibold text-brand-600 hover:underline"
                  >
                    বাংলাদেশ
                  </a>
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ৯ মিনিট আগে
                  </span>
                </div>
              </article>
            </div>
            <div className="space-y-5 divide-y divide-line sm:grid sm:grid-cols-3 sm:gap-5 sm:space-y-0 sm:divide-y-0 lg:col-span-3 lg:block lg:space-y-5 lg:divide-y [&>*:not(:first-child)]:pt-5 sm:[&>*:not(:first-child)]:pt-0 lg:[&>*:not(:first-child)]:pt-5">
              <article className="group">
                <a
                  href="news/26.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-26/640/360"
                    alt="শেষ ওভারের রোমাঞ্চে জিতল বাংলাদেশ, সিরিজে সমতা"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                  <a href="news/26.html" className="hover:text-brand-600">
                    শেষ ওভারের রোমাঞ্চে জিতল বাংলাদেশ, সিরিজে সমতা
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ৪০ মিনিট আগে
                  </span>
                </div>
              </article>
              <article className="group">
                <a
                  href="news/45.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-45/640/360"
                    alt="এসএসসির ফল প্রকাশ, পাসের হার ৮৩ শতাংশ"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                  <a href="news/45.html" className="hover:text-brand-600">
                    এসএসসির ফল প্রকাশ, পাসের হার ৮৩ শতাংশ
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ৩০ মিনিট আগে
                  </span>
                </div>
              </article>
              <article className="group">
                <a href="news/7.html" className="block overflow-hidden rounded">
                  <img
                    src="https://picsum.photos/seed/np-7/640/360"
                    alt="নির্বাচনী রোডম্যাপ নিয়ে দলগুলোর সঙ্গে সংলাপে বসছে কমিশন"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                  <a href="news/7.html" className="hover:text-brand-600">
                    নির্বাচনী রোডম্যাপ নিয়ে দলগুলোর সঙ্গে সংলাপে বসছে কমিশন
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ২৫ মিনিট আগে
                  </span>
                </div>
              </article>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded border border-line bg-white" data-tabs>
                <div
                  className="grid grid-cols-2 text-center text-sm font-semibold"
                  role="tablist"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected="true"
                    className="border-b-2 border-brand-600 py-3 text-brand-600 aria-[selected=false]:border-line aria-[selected=false]:text-muted"
                    data-tab="latest"
                  >
                    সর্বশেষ
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected="false"
                    className="border-b-2 border-brand-600 py-3 text-brand-600 aria-[selected=false]:border-line aria-[selected=false]:text-muted"
                    data-tab="popular"
                  >
                    সর্বাধিক পঠিত
                  </button>
                </div>
                <div className="px-4" data-panel="latest" role="tabpanel">
                  <ul className="divide-y divide-line">
                    <li className="py-3">
                      <article>
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/2.html"
                            className="hover:text-brand-600"
                          >
                            <span className="me-1.5 inline-flex items-center gap-1 rounded bg-brand-600 px-1.5 py-0.5 align-middle text-[11px] font-semibold text-white">
                              <span className="size-1.5 animate-pulse rounded-full bg-white"></span>
                              লাইভ
                            </span>
                            উপকূলে ঘূর্ণিঝড়ের সতর্কসংকেত, প্রস্তুত চার হাজার
                            আশ্রয়কেন্দ্র
                          </a>
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৯ মিনিট আগে
                          </span>
                        </div>
                      </article>
                    </li>
                    <li className="py-3">
                      <article>
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/15.html"
                            className="hover:text-brand-600"
                          >
                            জাপানে শক্তিশালী ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার
                          </a>
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ১৫ মিনিট আগে
                          </span>
                        </div>
                      </article>
                    </li>
                    <li className="py-3">
                      <article>
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/1.html"
                            className="hover:text-brand-600"
                          >
                            রাজধানীতে মেট্রোরেলের নতুন রুটের নির্মাণকাজ শুরু
                            হচ্ছে আগামী মাসে
                          </a>
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ১৮ মিনিট আগে
                          </span>
                        </div>
                      </article>
                    </li>
                    <li className="py-3">
                      <article>
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/7.html"
                            className="hover:text-brand-600"
                          >
                            নির্বাচনী রোডম্যাপ নিয়ে দলগুলোর সঙ্গে সংলাপে বসছে
                            কমিশন
                          </a>
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ২৫ মিনিট আগে
                          </span>
                        </div>
                      </article>
                    </li>
                    <li className="py-3">
                      <article>
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/45.html"
                            className="hover:text-brand-600"
                          >
                            এসএসসির ফল প্রকাশ, পাসের হার ৮৩ শতাংশ
                          </a>
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৩০ মিনিট আগে
                          </span>
                        </div>
                      </article>
                    </li>
                    <li className="py-3">
                      <article>
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/11.html"
                            className="hover:text-brand-600"
                          >
                            জলবায়ু সম্মেলনে ক্ষতিপূরণ তহবিলে নতুন প্রতিশ্রুতি
                          </a>
                        </h3>
                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৩৫ মিনিট আগে
                          </span>
                        </div>
                      </article>
                    </li>
                  </ul>
                  <a
                    href="latest.html"
                    className="block border-t border-line py-3 text-center text-sm font-semibold text-brand-600 hover:underline"
                  >
                    সব খবর
                  </a>
                </div>
                <div
                  className="px-4"
                  data-panel="popular"
                  role="tabpanel"
                  hidden
                >
                  <ol className="divide-y divide-line">
                    <li className="flex gap-3 py-3">
                      <span className="font-headline text-3xl font-bold leading-none text-brand-600/25">
                        ১
                      </span>
                      <a
                        href="news/3.html"
                        className="font-headline text-[0.95rem] font-semibold leading-snug hover:text-brand-600"
                      >
                        ডেঙ্গুতে এক দিনে হাসপাতালে ভর্তি সাত শতাধিক রোগী
                      </a>
                    </li>
                    <li className="flex gap-3 py-3">
                      <span className="font-headline text-3xl font-bold leading-none text-brand-600/25">
                        ২
                      </span>
                      <a
                        href="news/23.html"
                        className="font-headline text-[0.95rem] font-semibold leading-snug hover:text-brand-600"
                      >
                        তরুণদের কর্মসংস্থানে চাই নতুন ভাবনা
                      </a>
                    </li>
                    <li className="flex gap-3 py-3">
                      <span className="font-headline text-3xl font-bold leading-none text-brand-600/25">
                        ৩
                      </span>
                      <a
                        href="news/43.html"
                        className="font-headline text-[0.95rem] font-semibold leading-snug hover:text-brand-600"
                      >
                        স্মার্টফোনের ব্যাটারি দ্রুত ফুরোচ্ছে? জেনে নিন সমাধান
                      </a>
                    </li>
                    <li className="flex gap-3 py-3">
                      <span className="font-headline text-3xl font-bold leading-none text-brand-600/25">
                        ৪
                      </span>
                      <a
                        href="news/7.html"
                        className="font-headline text-[0.95rem] font-semibold leading-snug hover:text-brand-600"
                      >
                        নির্বাচনী রোডম্যাপ নিয়ে দলগুলোর সঙ্গে সংলাপে বসছে কমিশন
                      </a>
                    </li>
                    <li className="flex gap-3 py-3">
                      <span className="font-headline text-3xl font-bold leading-none text-brand-600/25">
                        ৫
                      </span>
                      <a
                        href="news/27.html"
                        className="font-headline text-[0.95rem] font-semibold leading-snug hover:text-brand-600"
                      >
                        সাফ চ্যাম্পিয়নশিপের সেমিফাইনালে বাংলাদেশের মেয়েরা
                      </a>
                    </li>
                    <li className="flex gap-3 py-3">
                      <span className="font-headline text-3xl font-bold leading-none text-brand-600/25">
                        ৬
                      </span>
                      <a
                        href="news/47.html"
                        className="font-headline text-[0.95rem] font-semibold leading-snug hover:text-brand-600"
                      >
                        নতুন শিক্ষাক্রমে মূল্যায়ন পদ্ধতিতে পরিবর্তন আসছে
                      </a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section
            className="grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4"
            aria-label="আরও খবর"
          >
            <article className="group">
              <a href="news/15.html" className="block overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-15/640/360"
                  alt="জাপানে শক্তিশালী ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার"
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                <a href="news/15.html" className="hover:text-brand-600">
                  জাপানে শক্তিশালী ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার
                </a>
              </h3>

              <div className="mt-1.5">
                <span className="inline-flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  ১৫ মিনিট আগে
                </span>
              </div>
            </article>
            <article className="group">
              <a href="news/16.html" className="block overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-16/640/360"
                  alt="রপ্তানি আয়ে টানা তৃতীয় মাসে প্রবৃদ্ধি, এগিয়ে তৈরি পোশাক"
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                <a href="news/16.html" className="hover:text-brand-600">
                  রপ্তানি আয়ে টানা তৃতীয় মাসে প্রবৃদ্ধি, এগিয়ে তৈরি পোশাক
                </a>
              </h3>

              <div className="mt-1.5">
                <span className="inline-flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  ৫৫ মিনিট আগে
                </span>
              </div>
            </article>
            <article className="group">
              <a href="news/11.html" className="block overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-11/640/360"
                  alt="জলবায়ু সম্মেলনে ক্ষতিপূরণ তহবিলে নতুন প্রতিশ্রুতি"
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                <a href="news/11.html" className="hover:text-brand-600">
                  জলবায়ু সম্মেলনে ক্ষতিপূরণ তহবিলে নতুন প্রতিশ্রুতি
                </a>
              </h3>

              <div className="mt-1.5">
                <span className="inline-flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  ৩৫ মিনিট আগে
                </span>
              </div>
            </article>
            <article className="group">
              <a href="news/41.html" className="block overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-41/640/360"
                  alt="দেশে ফাইভজি সেবার পরিধি বাড়ছে, নতুন ৩০ জেলায় চালু"
                  loading="lazy"
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <h3 className="mt-2 font-headline text-base font-semibold leading-snug">
                <a href="news/41.html" className="hover:text-brand-600">
                  দেশে ফাইভজি সেবার পরিধি বাড়ছে, নতুন ৩০ জেলায় চালু
                </a>
              </h3>

              <div className="mt-1.5">
                <span className="inline-flex items-center gap-1 text-xs text-muted">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  ১ ঘণ্টা আগে
                </span>
              </div>
            </article>
          </section>

          <section
            className="flex flex-wrap items-center gap-2 rounded bg-paper px-4 py-3 text-sm"
            aria-label="আলোচিত বিষয়"
          >
            <span className="font-semibold text-brand-600">আলোচিত:</span>
            <a
              href="search.html?q=%E0%A6%98%E0%A7%82%E0%A6%B0%E0%A7%8D%E0%A6%A3%E0%A6%BF%E0%A6%9D%E0%A6%A1%E0%A6%BC"
              className="rounded-full bg-white px-3 py-1 shadow-sm hover:text-brand-600"
            >
              #ঘূর্ণিঝড়
            </a>
            <a
              href="search.html?q=%E0%A6%8F%E0%A6%B8%E0%A6%8F%E0%A6%B8%E0%A6%B8%E0%A6%BF%20%E0%A6%AB%E0%A6%B2"
              className="rounded-full bg-white px-3 py-1 shadow-sm hover:text-brand-600"
            >
              #এসএসসি ফল
            </a>
            <a
              href="search.html?q=%E0%A6%A1%E0%A7%87%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A7%81"
              className="rounded-full bg-white px-3 py-1 shadow-sm hover:text-brand-600"
            >
              #ডেঙ্গু
            </a>
            <a
              href="search.html?q=%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%9A%E0%A6%A8"
              className="rounded-full bg-white px-3 py-1 shadow-sm hover:text-brand-600"
            >
              #নির্বাচন
            </a>
            <a
              href="search.html?q=%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%9F"
              className="rounded-full bg-white px-3 py-1 shadow-sm hover:text-brand-600"
            >
              #ক্রিকেট
            </a>
            <a
              href="search.html?q=%E0%A6%AE%E0%A7%87%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B2"
              className="rounded-full bg-white px-3 py-1 shadow-sm hover:text-brand-600"
            >
              #মেট্রোরেল
            </a>
          </section>

          <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
            <div className="space-y-12">
              <section>
                <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                  <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                    <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                    <a href="bangladesh.html" className="hover:text-brand-600">
                      বাংলাদেশ
                    </a>
                  </h2>
                  <a
                    href="bangladesh.html"
                    className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                  >
                    আরও
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </a>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="group">
                    <a
                      href="news/1.html"
                      className="block overflow-hidden rounded"
                    >
                      <img
                        src="https://picsum.photos/seed/np-1/640/360"
                        alt="রাজধানীতে মেট্রোরেলের নতুন রুটের নির্মাণকাজ শুরু হচ্ছে আগামী মাসে"
                        loading="lazy"
                        className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </a>
                    <h3 className="mt-2 font-headline text-xl font-semibold leading-snug">
                      <a href="news/1.html" className="hover:text-brand-600">
                        রাজধানীতে মেট্রোরেলের নতুন রুটের নির্মাণকাজ শুরু হচ্ছে
                        আগামী মাসে
                      </a>
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink/70">
                      নতুন এই রুট চালু হলে উত্তরা থেকে কমলাপুর পর্যন্ত যাতায়াতে
                      সময় কমবে প্রায় অর্ধেক, প্রতিদিন যাত্রী পরিবহন করা যাবে
                      পাঁচ লাখের বেশি।
                    </p>
                    <div className="mt-1.5">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১৮ মিনিট আগে
                      </span>
                    </div>
                  </article>
                  <div className="space-y-4 divide-y divide-line [&>*:not(:first-child)]:pt-4">
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/2.html"
                            className="hover:text-brand-600"
                          >
                            <span className="me-1.5 inline-flex items-center gap-1 rounded bg-brand-600 px-1.5 py-0.5 align-middle text-[11px] font-semibold text-white">
                              <span className="size-1.5 animate-pulse rounded-full bg-white"></span>
                              লাইভ
                            </span>
                            উপকূলে ঘূর্ণিঝড়ের সতর্কসংকেত, প্রস্তুত চার হাজার
                            আশ্রয়কেন্দ্র
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৯ মিনিট আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/2.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-2/320/240"
                          alt="উপকূলে ঘূর্ণিঝড়ের সতর্কসংকেত, প্রস্তুত চার হাজার আশ্রয়কেন্দ্র"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/3.html"
                            className="hover:text-brand-600"
                          >
                            ডেঙ্গুতে এক দিনে হাসপাতালে ভর্তি সাত শতাধিক রোগী
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৪৭ মিনিট আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/3.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-3/320/240"
                          alt="ডেঙ্গুতে এক দিনে হাসপাতালে ভর্তি সাত শতাধিক রোগী"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/4.html"
                            className="hover:text-brand-600"
                          >
                            পদ্মার চরে শীতকালীন সবজির বাম্পার ফলনের আশা
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ২ ঘণ্টা আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/4.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-4/320/240"
                          alt="পদ্মার চরে শীতকালীন সবজির বাম্পার ফলনের আশা"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/5.html"
                            className="hover:text-brand-600"
                          >
                            সিলেটে পাহাড়ি ঢলে নিম্নাঞ্চল প্লাবিত, পানিবন্দী
                            হাজারো পরিবার
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৩ ঘণ্টা আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/5.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-5/320/240"
                          alt="সিলেটে পাহাড়ি ঢলে নিম্নাঞ্চল প্লাবিত, পানিবন্দী হাজারো পরিবার"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                  <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                    <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                    <a href="politics.html" className="hover:text-brand-600">
                      রাজনীতি
                    </a>
                  </h2>
                  <a
                    href="politics.html"
                    className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                  >
                    আরও
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </a>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="group">
                    <a
                      href="news/7.html"
                      className="block overflow-hidden rounded"
                    >
                      <img
                        src="https://picsum.photos/seed/np-7/640/360"
                        alt="নির্বাচনী রোডম্যাপ নিয়ে দলগুলোর সঙ্গে সংলাপে বসছে কমিশন"
                        loading="lazy"
                        className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </a>
                    <h3 className="mt-2 font-headline text-xl font-semibold leading-snug">
                      <a href="news/7.html" className="hover:text-brand-600">
                        নির্বাচনী রোডম্যাপ নিয়ে দলগুলোর সঙ্গে সংলাপে বসছে কমিশন
                      </a>
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink/70">
                      আগামী সপ্তাহ থেকে নিবন্ধিত দলগুলোর সঙ্গে ধারাবাহিক বৈঠক
                      করবে নির্বাচন কমিশন।
                    </p>
                    <div className="mt-1.5">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ২৫ মিনিট আগে
                      </span>
                    </div>
                  </article>
                  <div className="space-y-4 divide-y divide-line [&>*:not(:first-child)]:pt-4">
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/8.html"
                            className="hover:text-brand-600"
                          >
                            সংস্কার প্রস্তাব নিয়ে ঐকমত্যে পৌঁছাতে আরও সময় চায়
                            দলগুলো
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ১ ঘণ্টা আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/8.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-8/320/240"
                          alt="সংস্কার প্রস্তাব নিয়ে ঐকমত্যে পৌঁছাতে আরও সময় চায় দলগুলো"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/9.html"
                            className="hover:text-brand-600"
                          >
                            তৃণমূলে সাংগঠনিক শক্তি বাড়াতে জেলা সফরে কেন্দ্রীয়
                            নেতারা
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৫ ঘণ্টা আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/9.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-9/320/240"
                          alt="তৃণমূলে সাংগঠনিক শক্তি বাড়াতে জেলা সফরে কেন্দ্রীয় নেতারা"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                    <article className="group flex gap-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-headline text-base font-semibold leading-snug">
                          <a
                            href="news/10.html"
                            className="hover:text-brand-600"
                          >
                            সংসদে বাজেট-পরবর্তী আলোচনায় উত্তপ্ত বিতর্ক
                          </a>
                        </h3>

                        <div className="mt-1">
                          <span className="inline-flex items-center gap-1 text-xs text-muted">
                            <svg
                              className="size-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <circle cx="12" cy="12" r="9" />
                              <path d="M12 7v5l3 2" />
                            </svg>
                            ৭ ঘণ্টা আগে
                          </span>
                        </div>
                      </div>
                      <a
                        href="news/10.html"
                        className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                      >
                        <img
                          src="https://picsum.photos/seed/np-10/320/240"
                          alt="সংসদে বাজেট-পরবর্তী আলোচনায় উত্তপ্ত বিতর্ক"
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </article>
                  </div>
                </div>
              </section>
            </div>
            <aside className="space-y-6">
              <div
                className="grid h-64 place-items-center rounded border border-dashed border-line bg-paper text-xs tracking-widest text-muted"
                role="complementary"
                aria-label="বিজ্ঞাপন"
              >
                বিজ্ঞাপন ৩০০×২৫০
              </div>

              <section
                className="rounded border border-line bg-white p-5"
                data-poll
              >
                <h2 className="flex items-center gap-2 text-lg font-bold">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  অনলাইন জরিপ
                </h2>
                <p className="mt-3 font-headline font-semibold leading-snug">
                  রাজধানীতে মেট্রোরেলের নতুন রুট যানজট কমাতে কার্যকর হবে বলে মনে
                  করেন কি?
                </p>
                <form className="mt-4 space-y-2" data-poll-form>
                  <label className="relative flex cursor-pointer items-center gap-3 overflow-hidden rounded border border-line px-3 py-2.5 hover:border-brand-600 has-[:checked]:border-brand-600">
                    <span
                      className="absolute inset-y-0 left-0 w-0 bg-brand-50 transition-all duration-700"
                      data-bar
                      style={{ "--pct": "64%" }}
                    ></span>
                    <input
                      type="radio"
                      name="vote"
                      value="yes"
                      className="relative accent-brand-600"
                      required
                    />
                    <span className="relative flex-1 text-sm font-medium">
                      হ্যাঁ
                    </span>
                    <span
                      className="relative hidden text-sm font-semibold text-brand-700"
                      data-pct
                    >
                      ৬৪%
                    </span>
                  </label>
                  <label className="relative flex cursor-pointer items-center gap-3 overflow-hidden rounded border border-line px-3 py-2.5 hover:border-brand-600 has-[:checked]:border-brand-600">
                    <span
                      className="absolute inset-y-0 left-0 w-0 bg-brand-50 transition-all duration-700"
                      data-bar
                      style={{ "--pct": "22%" }}
                    ></span>
                    <input
                      type="radio"
                      name="vote"
                      value="no"
                      className="relative accent-brand-600"
                      required
                    />
                    <span className="relative flex-1 text-sm font-medium">
                      না
                    </span>
                    <span
                      className="relative hidden text-sm font-semibold text-brand-700"
                      data-pct
                    >
                      ২২%
                    </span>
                  </label>
                  <label className="relative flex cursor-pointer items-center gap-3 overflow-hidden rounded border border-line px-3 py-2.5 hover:border-brand-600 has-[:checked]:border-brand-600">
                    <span
                      className="absolute inset-y-0 left-0 w-0 bg-brand-50 transition-all duration-700"
                      data-bar
                      style={{ "--pct": "14%" }}
                    ></span>
                    <input
                      type="radio"
                      name="vote"
                      value="unsure"
                      className="relative accent-brand-600"
                      required
                    />
                    <span className="relative flex-1 text-sm font-medium">
                      মন্তব্য নেই
                    </span>
                    <span
                      className="relative hidden text-sm font-semibold text-brand-700"
                      data-pct
                    >
                      ১৪%
                    </span>
                  </label>
                  <button className="btn mt-2 w-full">ভোট দিন</button>
                </form>
                <p className="mt-3 text-xs text-muted">মোট ভোট: ১২,৪৮০</p>
              </section>
            </aside>
          </div>

          <section className="-mx-4 bg-paper px-4 py-8 sm:mx-0 sm:rounded sm:px-6">
            <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
              <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                <a href="opinion.html" className="hover:text-brand-600">
                  মতামত
                </a>
              </h2>
              <a
                href="opinion.html"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
              >
                আরও
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <article className="group flex h-full flex-col rounded border border-line bg-white p-4 transition hover:shadow-md">
                <h3 className="font-headline text-lg font-semibold leading-snug">
                  <a href="news/21.html" className="hover:text-brand-600">
                    শিক্ষায় বিনিয়োগ ছাড়া টেকসই উন্নয়ন সম্ভব নয়
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/70">
                  মোট দেশজ উৎপাদনের দুই শতাংশের কম বরাদ্দ দিয়ে মানসম্মত শিক্ষার
                  স্বপ্ন দেখা কঠিন।
                </p>
                <a
                  href="author/kamrul-ahsan.html"
                  className="mt-4 flex items-center gap-3"
                >
                  <span className="size-11 relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-brand-50 font-semibold text-brand-700">
                    ক
                    <img
                      src="https://picsum.photos/seed/author-kamrul-ahsan/120/120"
                      alt="কামরুল আহসান"
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                      onError={(event) => event.currentTarget.remove()}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      কামরুল আহসান
                    </span>
                    <span className="block text-xs text-muted">
                      অধ্যাপক, অর্থনীতি বিভাগ
                    </span>
                  </span>
                </a>
              </article>
              <article className="group flex h-full flex-col rounded border border-line bg-white p-4 transition hover:shadow-md">
                <h3 className="font-headline text-lg font-semibold leading-snug">
                  <a href="news/22.html" className="hover:text-brand-600">
                    নগর পরিকল্পনায় মানুষের কথা কে ভাববে
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/70">
                  ফুটপাত, খেলার মাঠ আর গণপরিসর হারিয়ে যাচ্ছে; শহর হচ্ছে কেবল
                  গাড়ির জন্য।
                </p>
                <a
                  href="author/naznin-sultana.html"
                  className="mt-4 flex items-center gap-3"
                >
                  <span className="size-11 relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-brand-50 font-semibold text-brand-700">
                    ন
                    <img
                      src="https://picsum.photos/seed/author-naznin-sultana/120/120"
                      alt="নাজনীন সুলতানা"
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                      onError={(event) => event.currentTarget.remove()}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      নাজনীন সুলতানা
                    </span>
                    <span className="block text-xs text-muted">
                      নগর পরিকল্পনাবিদ
                    </span>
                  </span>
                </a>
              </article>
              <article className="group flex h-full flex-col rounded border border-line bg-white p-4 transition hover:shadow-md">
                <h3 className="font-headline text-lg font-semibold leading-snug">
                  <a href="news/23.html" className="hover:text-brand-600">
                    তরুণদের কর্মসংস্থানে চাই নতুন ভাবনা
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/70">
                  প্রতিবছর ২০ লাখ তরুণ শ্রমবাজারে আসছেন, কিন্তু তাঁদের জন্য কাজ
                  তৈরি হচ্ছে কি?
                </p>
                <a
                  href="author/mahbub-alam.html"
                  className="mt-4 flex items-center gap-3"
                >
                  <span className="size-11 relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-brand-50 font-semibold text-brand-700">
                    ম
                    <img
                      src="https://picsum.photos/seed/author-mahbub-alam/120/120"
                      alt="মাহবুব আলম"
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                      onError={(event) => event.currentTarget.remove()}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      মাহবুব আলম
                    </span>
                    <span className="block text-xs text-muted">
                      উন্নয়নকর্মী ও লেখক
                    </span>
                  </span>
                </a>
              </article>
              <article className="group flex h-full flex-col rounded border border-line bg-white p-4 transition hover:shadow-md">
                <h3 className="font-headline text-lg font-semibold leading-snug">
                  <a href="news/24.html" className="hover:text-brand-600">
                    জলবায়ু ন্যায্যতার প্রশ্নে বাংলাদেশের অবস্থান
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/70">
                  ক্ষতিপূরণ তহবিলের প্রতিশ্রুতি বাস্তবায়নে দর-কষাকষিতে আরও
                  সক্রিয় হতে হবে।
                </p>
                <a
                  href="author/sadia-rahman.html"
                  className="mt-4 flex items-center gap-3"
                >
                  <span className="size-11 relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-brand-50 font-semibold text-brand-700">
                    স
                    <img
                      src="https://picsum.photos/seed/author-sadia-rahman/120/120"
                      alt="সাদিয়া রহমান"
                      className="absolute inset-0 size-full object-cover"
                      loading="lazy"
                      onError={(event) => event.currentTarget.remove()}
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">
                      সাদিয়া রহমান
                    </span>
                    <span className="block text-xs text-muted">
                      জলবায়ু বিশেষজ্ঞ
                    </span>
                  </span>
                </a>
              </article>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
              <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                <a href="world.html" className="hover:text-brand-600">
                  বিশ্ব
                </a>
              </h2>
              <a
                href="world.html"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
              >
                আরও
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="group">
                <a
                  href="news/11.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-11/640/360"
                    alt="জলবায়ু সম্মেলনে ক্ষতিপূরণ তহবিলে নতুন প্রতিশ্রুতি"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-xl font-semibold leading-snug">
                  <a href="news/11.html" className="hover:text-brand-600">
                    জলবায়ু সম্মেলনে ক্ষতিপূরণ তহবিলে নতুন প্রতিশ্রুতি
                  </a>
                </h3>
                <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink/70">
                  ক্ষতিগ্রস্ত দেশগুলোর জন্য ১০০ কোটি ডলারের অতিরিক্ত তহবিলের
                  ঘোষণা এসেছে।
                </p>
                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ৩৫ মিনিট আগে
                  </span>
                </div>
              </article>
              <div className="space-y-4 divide-y divide-line [&>*:not(:first-child)]:pt-4">
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/12.html" className="hover:text-brand-600">
                        মধ্যপ্রাচ্যে যুদ্ধবিরতির আলোচনা নতুন পর্যায়ে
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/12.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-12/320/240"
                      alt="মধ্যপ্রাচ্যে যুদ্ধবিরতির আলোচনা নতুন পর্যায়ে"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/13.html" className="hover:text-brand-600">
                        ইউরোপে জ্বালানির দাম কমায় স্বস্তিতে সাধারণ মানুষ
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৩ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/13.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-13/320/240"
                      alt="ইউরোপে জ্বালানির দাম কমায় স্বস্তিতে সাধারণ মানুষ"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/14.html" className="hover:text-brand-600">
                        দক্ষিণ এশিয়ায় বাণিজ্য বাড়াতে আঞ্চলিক চুক্তির খসড়া
                        চূড়ান্ত
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৫ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/14.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-14/320/240"
                      alt="দক্ষিণ এশিয়ায় বাণিজ্য বাড়াতে আঞ্চলিক চুক্তির খসড়া চূড়ান্ত"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/15.html" className="hover:text-brand-600">
                        জাপানে শক্তিশালী ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১৫ মিনিট আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/15.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-15/320/240"
                      alt="জাপানে শক্তিশালী ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
              </div>
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
              <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                <a href="sports.html" className="hover:text-brand-600">
                  খেলা
                </a>
              </h2>
              <a
                href="sports.html"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
              >
                আরও
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <article className="group">
                  <a
                    href="news/26.html"
                    className="block overflow-hidden rounded"
                  >
                    <img
                      src="https://picsum.photos/seed/np-26/1200/675"
                      alt="শেষ ওভারের রোমাঞ্চে জিতল বাংলাদেশ, সিরিজে সমতা"
                      loading="lazy"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                  <h2 className="mt-3 font-headline text-2xl font-bold leading-snug md:text-[1.9rem]">
                    <a href="news/26.html" className="hover:text-brand-600">
                      শেষ ওভারের রোমাঞ্চে জিতল বাংলাদেশ, সিরিজে সমতা
                    </a>
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink/75">
                    শেষ ওভারে দরকার ছিল ১২ রান; দুই ছক্কায় দলকে জয় এনে দিলেন
                    লোয়ার অর্ডারের এক ব্যাটসম্যান।
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <a
                      href="sports.html"
                      className="text-xs font-semibold text-brand-600 hover:underline"
                    >
                      খেলা
                    </a>
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <svg
                        className="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      ৪০ মিনিট আগে
                    </span>
                  </div>
                </article>
              </div>
              <div className="space-y-4 divide-y divide-line [&>*:not(:first-child)]:pt-4">
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/27.html" className="hover:text-brand-600">
                        সাফ চ্যাম্পিয়নশিপের সেমিফাইনালে বাংলাদেশের মেয়েরা
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/27.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-27/320/240"
                      alt="সাফ চ্যাম্পিয়নশিপের সেমিফাইনালে বাংলাদেশের মেয়েরা"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/28.html" className="hover:text-brand-600">
                        বিপিএলের নিলামে সবচেয়ে দামি খেলোয়াড় এক তরুণ পেসার
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৫ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/28.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-28/320/240"
                      alt="বিপিএলের নিলামে সবচেয়ে দামি খেলোয়াড় এক তরুণ পেসার"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/29.html" className="hover:text-brand-600">
                        চ্যাম্পিয়নস লিগে শেষ মুহূর্তের গোলে নাটকীয় জয়
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৮ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/29.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-29/320/240"
                      alt="চ্যাম্পিয়নস লিগে শেষ মুহূর্তের গোলে নাটকীয় জয়"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
                <article className="group flex gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/30.html" className="hover:text-brand-600">
                        দাবায় আন্তর্জাতিক মাস্টার নর্ম পেলেন ১৬ বছরের কিশোর
                      </a>
                    </h3>

                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১৩ ঘণ্টা আগে
                      </span>
                    </div>
                  </div>
                  <a
                    href="news/30.html"
                    className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                  >
                    <img
                      src="https://picsum.photos/seed/np-30/320/240"
                      alt="দাবায় আন্তর্জাতিক মাস্টার নর্ম পেলেন ১৬ বছরের কিশোর"
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                </article>
              </div>
            </div>
            <div className="mt-6 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <article className="group flex gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="font-headline text-base font-semibold leading-snug">
                    <a href="news/31.html" className="hover:text-brand-600">
                      টেস্ট দলে ফিরলেন অভিজ্ঞ ব্যাটসম্যান, বাদ দুই পেসার
                    </a>
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-ink/70">
                    আসন্ন সিরিজের জন্য ১৫ সদস্যের দল ঘোষণা করেছে নির্বাচক কমিটি।
                  </p>
                  <div className="mt-1">
                    <span className="inline-flex items-center gap-1 text-xs text-muted">
                      <svg
                        className="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      ১৬ ঘণ্টা আগে
                    </span>
                  </div>
                </div>
                <a
                  href="news/31.html"
                  className="block w-28 shrink-0 overflow-hidden rounded sm:w-32"
                >
                  <img
                    src="https://picsum.photos/seed/np-31/320/240"
                    alt="টেস্ট দলে ফিরলেন অভিজ্ঞ ব্যাটসম্যান, বাদ দুই পেসার"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
              </article>
            </div>
          </section>
        </div>

        <section className="mt-12 bg-ink py-10 text-white" aria-label="ভিডিও">
          <div className="container">
            <div className="mb-5 flex items-center justify-between border-b border-white/20 pb-2">
              <h2 className="flex items-center gap-2 text-2xl font-bold">
                <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                <a href="videos.html" className="hover:text-brand-400">
                  ভিডিও
                </a>
              </h2>
              <a
                href="videos.html"
                className="inline-flex items-center gap-0.5 text-sm text-white/70 hover:text-white"
              >
                সব ভিডিও
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="group">
                <a
                  href="video/1.html"
                  className="relative block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/vid-1/1200/675"
                    alt="ঘূর্ণিঝড় মোকাবিলায় উপকূলে যেভাবে চলছে প্রস্তুতি"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid size-16 place-items-center rounded-full bg-brand-600/90 text-white shadow-lg transition group-hover:scale-110">
                      <svg
                        className="size-7 translate-x-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5v14l11-7z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
                <h3 className="mt-3 font-headline text-xl font-bold">
                  <a href="video/1.html" className="hover:text-brand-400">
                    ঘূর্ণিঝড় মোকাবিলায় উপকূলে যেভাবে চলছে প্রস্তুতি
                  </a>
                </h3>
              </article>
              <div className="grid gap-5 sm:grid-cols-2">
                <article className="group">
                  <a
                    href="video/2.html"
                    className="relative block overflow-hidden rounded"
                  >
                    <img
                      src="https://picsum.photos/seed/vid-2/640/360"
                      alt="শেষ ওভারের সেই দুই ছক্কা: ম্যাচের হাইলাইটস"
                      loading="lazy"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 bottom-2 inline-flex items-center gap-1 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
                      <svg
                        className="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5v14l11-7z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                      ৬:৪৫
                    </span>
                  </a>
                  <h3 className="mt-2 font-headline text-base font-semibold leading-snug text-white">
                    <a href="video/2.html" className="hover:text-brand-400">
                      শেষ ওভারের সেই দুই ছক্কা: ম্যাচের হাইলাইটস
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/60">
                    খেলা · ১ ঘণ্টা আগে
                  </div>
                </article>
                <article className="group">
                  <a
                    href="video/3.html"
                    className="relative block overflow-hidden rounded"
                  >
                    <img
                      src="https://picsum.photos/seed/vid-3/640/360"
                      alt="ঘরেই কাচ্চি বিরিয়ানি: ধাপে ধাপে রেসিপি"
                      loading="lazy"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 bottom-2 inline-flex items-center gap-1 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
                      <svg
                        className="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5v14l11-7z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                      ১১:০৩
                    </span>
                  </a>
                  <h3 className="mt-2 font-headline text-base font-semibold leading-snug text-white">
                    <a href="video/3.html" className="hover:text-brand-400">
                      ঘরেই কাচ্চি বিরিয়ানি: ধাপে ধাপে রেসিপি
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/60">
                    জীবনযাপন · ৫ ঘণ্টা আগে
                  </div>
                </article>
                <article className="group">
                  <a
                    href="video/4.html"
                    className="relative block overflow-hidden rounded"
                  >
                    <img
                      src="https://picsum.photos/seed/vid-4/640/360"
                      alt="মেট্রোরেলের নতুন রুট: কোথায় কোথায় থামবে"
                      loading="lazy"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 bottom-2 inline-flex items-center gap-1 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
                      <svg
                        className="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5v14l11-7z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                      ৩:৩০
                    </span>
                  </a>
                  <h3 className="mt-2 font-headline text-base font-semibold leading-snug text-white">
                    <a href="video/4.html" className="hover:text-brand-400">
                      মেট্রোরেলের নতুন রুট: কোথায় কোথায় থামবে
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/60">
                    বাংলাদেশ · ৭ ঘণ্টা আগে
                  </div>
                </article>
                <article className="group">
                  <a
                    href="video/5.html"
                    className="relative block overflow-hidden rounded"
                  >
                    <img
                      src="https://picsum.photos/seed/vid-5/640/360"
                      alt="বাংলা ভাষায় এআই: তরুণ উদ্যোক্তাদের গল্প"
                      loading="lazy"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-2 bottom-2 inline-flex items-center gap-1 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
                      <svg
                        className="size-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path
                          d="M8 5v14l11-7z"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                      ৮:২০
                    </span>
                  </a>
                  <h3 className="mt-2 font-headline text-base font-semibold leading-snug text-white">
                    <a href="video/5.html" className="hover:text-brand-400">
                      বাংলা ভাষায় এআই: তরুণ উদ্যোক্তাদের গল্প
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/60">
                    প্রযুক্তি · ১০ ঘণ্টা আগে
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <div className="container space-y-12 pt-12">
          <section>
            <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
              <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                <a href="entertainment.html" className="hover:text-brand-600">
                  বিনোদন
                </a>
              </h2>
              <a
                href="entertainment.html"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
              >
                আরও
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-32/640/800"
                  alt="সিনেমা হলে মুক্তি পাচ্ছে বছরের সবচেয়ে আলোচিত ছবি"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-headline text-lg font-semibold leading-snug text-white">
                    <a
                      href="news/32.html"
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      সিনেমা হলে মুক্তি পাচ্ছে বছরের সবচেয়ে আলোচিত ছবি
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/70">১ ঘণ্টা আগে</div>
                </div>
              </article>
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-33/640/800"
                  alt="আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কার পেল বাংলাদেশি স্বল্পদৈর্ঘ্য"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-headline text-lg font-semibold leading-snug text-white">
                    <a
                      href="news/33.html"
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      আন্তর্জাতিক চলচ্চিত্র উৎসবে পুরস্কার পেল বাংলাদেশি
                      স্বল্পদৈর্ঘ্য
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/70">৪ ঘণ্টা আগে</div>
                </div>
              </article>
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-34/640/800"
                  alt="ওটিটিতে নতুন ওয়েব সিরিজ, প্রথম সপ্তাহেই দর্শকের রেকর্ড"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-headline text-lg font-semibold leading-snug text-white">
                    <a
                      href="news/34.html"
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      ওটিটিতে নতুন ওয়েব সিরিজ, প্রথম সপ্তাহেই দর্শকের রেকর্ড
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/70">৯ ঘণ্টা আগে</div>
                </div>
              </article>
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/np-35/640/800"
                  alt="নতুন অ্যালবাম নিয়ে ফিরছে নব্বই দশকের জনপ্রিয় ব্যান্ড"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-headline text-lg font-semibold leading-snug text-white">
                    <a
                      href="news/35.html"
                      className="after:absolute after:inset-0 hover:underline"
                    >
                      নতুন অ্যালবাম নিয়ে ফিরছে নব্বই দশকের জনপ্রিয় ব্যান্ড
                    </a>
                  </h3>
                  <div className="mt-1 text-xs text-white/70">১২ ঘণ্টা আগে</div>
                </div>
              </article>
            </div>
          </section>

          <div
            className="grid h-[90px] place-items-center rounded border border-dashed border-line bg-paper text-xs tracking-widest text-muted"
            role="complementary"
            aria-label="বিজ্ঞাপন"
          >
            বিজ্ঞাপন ৯৭০×৯০
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <section>
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  <a href="business.html" className="hover:text-brand-600">
                    বাণিজ্য
                  </a>
                </h2>
                <a
                  href="business.html"
                  className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                >
                  আরও
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </a>
              </div>

              <article className="group">
                <a
                  href="news/16.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-16/640/360"
                    alt="রপ্তানি আয়ে টানা তৃতীয় মাসে প্রবৃদ্ধি, এগিয়ে তৈরি পোশাক"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug">
                  <a href="news/16.html" className="hover:text-brand-600">
                    রপ্তানি আয়ে টানা তৃতীয় মাসে প্রবৃদ্ধি, এগিয়ে তৈরি পোশাক
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ৫৫ মিনিট আগে
                  </span>
                </div>
              </article>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/17.html" className="hover:text-brand-600">
                        ব্যাংকঋণের সুদহার আরও বাড়ল, চাপে ছোট উদ্যোক্তারা
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ২ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/18.html" className="hover:text-brand-600">
                        পুঁজিবাজারে লেনদেন ছাড়াল হাজার কোটি টাকা
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৪ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/19.html" className="hover:text-brand-600">
                        রেমিট্যান্স প্রবাহে রেকর্ড, রিজার্ভে স্বস্তি
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৮ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  <a href="technology.html" className="hover:text-brand-600">
                    প্রযুক্তি
                  </a>
                </h2>
                <a
                  href="technology.html"
                  className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                >
                  আরও
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </a>
              </div>

              <article className="group">
                <a
                  href="news/41.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-41/640/360"
                    alt="দেশে ফাইভজি সেবার পরিধি বাড়ছে, নতুন ৩০ জেলায় চালু"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug">
                  <a href="news/41.html" className="hover:text-brand-600">
                    দেশে ফাইভজি সেবার পরিধি বাড়ছে, নতুন ৩০ জেলায় চালু
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ১ ঘণ্টা আগে
                  </span>
                </div>
              </article>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/42.html" className="hover:text-brand-600">
                        কৃত্রিম বুদ্ধিমত্তা নিয়ে কাজ করা দেশীয় স্টার্টআপে ৫০
                        লাখ ডলার বিনিয়োগ
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৪ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/43.html" className="hover:text-brand-600">
                        স্মার্টফোনের ব্যাটারি দ্রুত ফুরোচ্ছে? জেনে নিন সমাধান
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১২ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/44.html" className="hover:text-brand-600">
                        সাইবার প্রতারণা থেকে বাঁচতে যে ৭টি বিষয় মনে রাখবেন
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১৮ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  <a href="education.html" className="hover:text-brand-600">
                    শিক্ষা
                  </a>
                </h2>
                <a
                  href="education.html"
                  className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                >
                  আরও
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </a>
              </div>

              <article className="group">
                <a
                  href="news/45.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-45/640/360"
                    alt="এসএসসির ফল প্রকাশ, পাসের হার ৮৩ শতাংশ"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug">
                  <a href="news/45.html" className="hover:text-brand-600">
                    এসএসসির ফল প্রকাশ, পাসের হার ৮৩ শতাংশ
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ৩০ মিনিট আগে
                  </span>
                </div>
              </article>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/46.html" className="hover:text-brand-600">
                        বিশ্ববিদ্যালয় ভর্তি পরীক্ষা গুচ্ছ পদ্ধতিতেই, সময়সূচি
                        ঘোষণা
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৩ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/47.html" className="hover:text-brand-600">
                        নতুন শিক্ষাক্রমে মূল্যায়ন পদ্ধতিতে পরিবর্তন আসছে
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১০ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/48.html" className="hover:text-brand-600">
                        বিদেশে উচ্চশিক্ষায় বৃত্তির আবেদন শুরু, জেনে নিন
                        খুঁটিনাটি
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ২৩ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
            </section>
          </div>

          <section>
            <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
              <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                <a href="photos.html" className="hover:text-brand-600">
                  ছবি
                </a>
              </h2>
              <a
                href="photos.html"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
              >
                আরও
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/gal-1/640/480"
                  alt="শরতের কাশবনে ছুটির বিকেল"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-xs text-white">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  ১২টি ছবি
                </span>
                <h3 className="absolute inset-x-0 bottom-0 p-3 font-headline text-base font-semibold leading-snug text-white">
                  <a
                    href="photo/1.html"
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    শরতের কাশবনে ছুটির বিকেল
                  </a>
                </h3>
              </article>
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/gal-2/640/480"
                  alt="উপকূলে ঘূর্ণিঝড়ের আগে প্রস্তুতির ছবি"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-xs text-white">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  ১০টি ছবি
                </span>
                <h3 className="absolute inset-x-0 bottom-0 p-3 font-headline text-base font-semibold leading-snug text-white">
                  <a
                    href="photo/2.html"
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    উপকূলে ঘূর্ণিঝড়ের আগে প্রস্তুতির ছবি
                  </a>
                </h3>
              </article>
              <article className="group relative overflow-hidden rounded">
                <img
                  src="https://picsum.photos/seed/gal-3/640/480"
                  alt="মাঠে-গ্যালারিতে উৎসবের রং"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-xs text-white">
                  <svg
                    className="size-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8a2 2 0 0 1 2-2h2l2-2h6l2 2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                  ১৪টি ছবি
                </span>
                <h3 className="absolute inset-x-0 bottom-0 p-3 font-headline text-base font-semibold leading-snug text-white">
                  <a
                    href="photo/3.html"
                    className="after:absolute after:inset-0 hover:underline"
                  >
                    মাঠে-গ্যালারিতে উৎসবের রং
                  </a>
                </h3>
              </article>
            </div>
          </section>

          <section className="rounded bg-gradient-to-br from-brand-600 to-brand-900 p-6 text-white">
            <div className="flex items-center gap-2 text-lg font-bold">
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              আমার এলাকার খবর
            </div>
            <p className="mt-1 text-sm text-white/75">
              বিভাগ ও জেলা বেছে নিন, দেখুন আপনার এলাকার সর্বশেষ খবর।
            </p>
            <form
              action="my-area.html"
              className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
              data-area-form
            >
              <label className="sr-only" htmlFor="home-division">
                বিভাগ
              </label>
              <select
                id="home-division"
                name="division"
                className="rounded border-0 bg-white px-3 py-2.5 text-sm text-ink"
                data-division
              >
                <option value="">বিভাগ নির্বাচন করুন</option>
                <option>ঢাকা</option>
                <option>চট্টগ্রাম</option>
                <option>রাজশাহী</option>
                <option>খুলনা</option>
                <option>বরিশাল</option>
                <option>সিলেট</option>
                <option>রংপুর</option>
                <option>ময়মনসিংহ</option>
              </select>
              <label className="sr-only" htmlFor="home-district">
                জেলা
              </label>
              <select
                id="home-district"
                name="district"
                className="rounded border-0 bg-white px-3 py-2.5 text-sm text-ink"
                data-district
                disabled
              >
                <option value="">জেলা নির্বাচন করুন</option>
              </select>
              <button className="rounded bg-ink px-5 py-2.5 text-sm font-semibold hover:bg-black">
                দেখুন
              </button>
            </form>
          </section>

          <div className="grid gap-10 md:grid-cols-3">
            <section>
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  <a href="lifestyle.html" className="hover:text-brand-600">
                    জীবনযাপন
                  </a>
                </h2>
                <a
                  href="lifestyle.html"
                  className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                >
                  আরও
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </a>
              </div>

              <article className="group">
                <a
                  href="news/37.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-37/640/360"
                    alt="শীতের আগে ত্বকের যত্নে যা করবেন"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug">
                  <a href="news/37.html" className="hover:text-brand-600">
                    শীতের আগে ত্বকের যত্নে যা করবেন
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ২ ঘণ্টা আগে
                  </span>
                </div>
              </article>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/38.html" className="hover:text-brand-600">
                        ঘরেই বানান রেস্টুরেন্টের স্বাদের কাচ্চি বিরিয়ানি
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৬ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/39.html" className="hover:text-brand-600">
                        ছোট্ট বারান্দায় সবুজ বাগান করার সহজ উপায়
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১০ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/40.html" className="hover:text-brand-600">
                        কম খরচে সুন্দরবন ঘুরে আসার পরিকল্পনা
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ২১ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  <a href="health.html" className="hover:text-brand-600">
                    স্বাস্থ্য
                  </a>
                </h2>
                <a
                  href="health.html"
                  className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                >
                  আরও
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </a>
              </div>

              <article className="group">
                <a
                  href="news/49.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-49/640/360"
                    alt="হৃদ্‌রোগের ঝুঁকি কমাতে প্রতিদিন হাঁটুন ৩০ মিনিট"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug">
                  <a href="news/49.html" className="hover:text-brand-600">
                    হৃদ্‌রোগের ঝুঁকি কমাতে প্রতিদিন হাঁটুন ৩০ মিনিট
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ২ ঘণ্টা আগে
                  </span>
                </div>
              </article>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/50.html" className="hover:text-brand-600">
                        শিশুদের নিউমোনিয়া: লক্ষণ দেখলেই যা করবেন
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৭ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/51.html" className="hover:text-brand-600">
                        ডায়াবেটিস নিয়ন্ত্রণে খাদ্যাভ্যাসে যে পরিবর্তন জরুরি
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১৪ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/52.html" className="hover:text-brand-600">
                        মানসিক চাপ কমাতে ঘুমের গুরুত্ব
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১ দিন আগে
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between border-b-2 border-ink/90 pb-2">
                <h2 className="flex items-center gap-2 text-xl font-bold md:text-2xl">
                  <span className="h-5 w-1.5 rounded-sm bg-brand-600"></span>
                  <a href="jobs.html" className="hover:text-brand-600">
                    চাকরি
                  </a>
                </h2>
                <a
                  href="jobs.html"
                  className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-brand-600"
                >
                  আরও
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </a>
              </div>

              <article className="group">
                <a
                  href="news/53.html"
                  className="block overflow-hidden rounded"
                >
                  <img
                    src="https://picsum.photos/seed/np-53/640/360"
                    alt="সরকারি চাকরিতে ১৫ হাজার পদে নিয়োগ বিজ্ঞপ্তি আসছে"
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </a>
                <h3 className="mt-2 font-headline text-lg font-semibold leading-snug">
                  <a href="news/53.html" className="hover:text-brand-600">
                    সরকারি চাকরিতে ১৫ হাজার পদে নিয়োগ বিজ্ঞপ্তি আসছে
                  </a>
                </h3>

                <div className="mt-1.5">
                  <span className="inline-flex items-center gap-1 text-xs text-muted">
                    <svg
                      className="size-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    ১ ঘণ্টা আগে
                  </span>
                </div>
              </article>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/54.html" className="hover:text-brand-600">
                        ব্যাংকে সিনিয়র অফিসার পদে নিয়োগ, আবেদন অনলাইনে
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ৫ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/55.html" className="hover:text-brand-600">
                        বিসিএস প্রস্তুতি: লিখিত পরীক্ষায় ভালো করার কৌশল
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১৫ ঘণ্টা আগে
                      </span>
                    </div>
                  </article>
                </li>
                <li className="py-3">
                  <article>
                    <h3 className="font-headline text-base font-semibold leading-snug">
                      <a href="news/56.html" className="hover:text-brand-600">
                        চাকরির সাক্ষাৎকারে যে ভুলগুলো এড়িয়ে চলবেন
                      </a>
                    </h3>
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 text-xs text-muted">
                        <svg
                          className="size-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </svg>
                        ১ দিন আগে
                      </span>
                    </div>
                  </article>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <button
        type="button"
        className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-40 hidden size-11 place-items-center rounded-full bg-brand-600 text-white shadow-lg hover:bg-brand-700"
        data-back-to-top
        aria-label="ওপরে যান"
      >
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>
    </>
  );
}

export default App;
