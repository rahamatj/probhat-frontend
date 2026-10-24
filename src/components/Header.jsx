import React from "react";

function Header() {
  return (
    <>
      <header className="border-b border-line bg-white">
        <div className="container grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-24">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="inline-grid size-10 place-items-center rounded-full hover:bg-paper"
              data-drawer-open
              aria-label="মেনু খুলুন"
              aria-controls="drawer"
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
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              type="button"
              className="inline-grid size-10 place-items-center rounded-full hover:bg-paper"
              data-search-open
              aria-label="খুঁজুন"
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
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <a
              href="index.html"
              className="inline-flex items-center gap-2 font-logo text-3xl md:text-5xl leading-none text-ink"
              aria-label="দৈনিক প্রভাত — প্রথম পাতা"
            >
              <span className="relative inline-grid size-[1.1em] place-items-center rounded-full bg-brand-600 text-white text-[0.55em]">
                প্র
              </span>
              <span>দৈনিক প্রভাত</span>
            </a>
            <p className="mt-1 hidden text-xs tracking-wide text-muted md:block">
              সত্যের সন্ধানে প্রতিদিন
            </p>
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              href="epaper.html"
              className="hidden rounded border border-line px-3 py-1.5 text-sm font-medium hover:border-brand-600 hover:text-brand-600 lg:inline-flex"
            >
              ই-পেপার
            </a>
            <a
              href="login.html"
              className="inline-flex items-center gap-1.5 rounded bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-700"
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
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
              </svg>
              <span className="hidden sm:inline">লগইন</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
