import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mt-16 bg-ink text-white/80">
        <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_2fr_1fr]">
          <div>
            <div className="[&_a]:text-white">
              <a
                href="index.html"
                className="inline-flex items-center gap-2 font-logo text-3xl leading-none text-ink"
                aria-label="দৈনিক প্রভাত — প্রথম পাতা"
              >
                <span className="relative inline-grid size-[1.1em] place-items-center rounded-full bg-brand-600 text-white text-[0.55em]">
                  প্র
                </span>
                <span>দৈনিক প্রভাত</span>
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              সত্যের সন্ধানে প্রতিদিন। বস্তুনিষ্ঠ, নিরপেক্ষ ও দায়িত্বশীল
              সাংবাদিকতায় আমরা প্রতিশ্রুতিবদ্ধ।
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <svg
                  className="size-4 mt-0.5 shrink-0"
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
                ৪২ কারওয়ান বাজার, ঢাকা ১২১৫
              </li>
              <li className="flex gap-2">
                <svg
                  className="size-4 mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                +৮৮০ ২ ৯৮৭৬৫৪৩২
              </li>
              <li className="flex gap-2">
                <svg
                  className="size-4 mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                info@example.com
              </li>
            </ul>
            <div className="mt-4 text-white/80">
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
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              বিভাগ
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm sm:grid-cols-3">
              <li>
                <a
                  href="bangladesh.html"
                  className="hover:text-white hover:underline"
                >
                  বাংলাদেশ
                </a>
              </li>
              <li>
                <a
                  href="politics.html"
                  className="hover:text-white hover:underline"
                >
                  রাজনীতি
                </a>
              </li>
              <li>
                <a
                  href="world.html"
                  className="hover:text-white hover:underline"
                >
                  বিশ্ব
                </a>
              </li>
              <li>
                <a
                  href="business.html"
                  className="hover:text-white hover:underline"
                >
                  বাণিজ্য
                </a>
              </li>
              <li>
                <a
                  href="opinion.html"
                  className="hover:text-white hover:underline"
                >
                  মতামত
                </a>
              </li>
              <li>
                <a
                  href="sports.html"
                  className="hover:text-white hover:underline"
                >
                  খেলা
                </a>
              </li>
              <li>
                <a
                  href="entertainment.html"
                  className="hover:text-white hover:underline"
                >
                  বিনোদন
                </a>
              </li>
              <li>
                <a
                  href="lifestyle.html"
                  className="hover:text-white hover:underline"
                >
                  জীবনযাপন
                </a>
              </li>
              <li>
                <a
                  href="technology.html"
                  className="hover:text-white hover:underline"
                >
                  প্রযুক্তি
                </a>
              </li>
              <li>
                <a
                  href="education.html"
                  className="hover:text-white hover:underline"
                >
                  শিক্ষা
                </a>
              </li>
              <li>
                <a
                  href="health.html"
                  className="hover:text-white hover:underline"
                >
                  স্বাস্থ্য
                </a>
              </li>
              <li>
                <a
                  href="jobs.html"
                  className="hover:text-white hover:underline"
                >
                  চাকরি
                </a>
              </li>
              <li>
                <a
                  href="latest.html"
                  className="hover:text-white hover:underline"
                >
                  সর্বশেষ
                </a>
              </li>
              <li>
                <a
                  href="videos.html"
                  className="hover:text-white hover:underline"
                >
                  ভিডিও
                </a>
              </li>
              <li>
                <a
                  href="photos.html"
                  className="hover:text-white hover:underline"
                >
                  ছবি
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              প্রতিষ্ঠান
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="about.html"
                  className="hover:text-white hover:underline"
                >
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="hover:text-white hover:underline"
                >
                  যোগাযোগ
                </a>
              </li>
              <li>
                <a
                  href="advertise.html"
                  className="hover:text-white hover:underline"
                >
                  বিজ্ঞাপন দিন
                </a>
              </li>
              <li>
                <a
                  href="privacy.html"
                  className="hover:text-white hover:underline"
                >
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a
                  href="terms.html"
                  className="hover:text-white hover:underline"
                >
                  ব্যবহারের শর্তাবলি
                </a>
              </li>
              <li>
                <a
                  href="archive.html"
                  className="hover:text-white hover:underline"
                >
                  আর্কাইভ
                </a>
              </li>
            </ul>
            <h2 className="mb-3 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              অ্যাপ ডাউনলোড
            </h2>
            <div className="flex flex-wrap gap-2">
              <a
                href="#"
                className="rounded border border-white/20 px-3 py-1.5 text-xs hover:bg-white/10"
              >
                Google Play
              </a>
              <a
                href="#"
                className="rounded border border-white/20 px-3 py-1.5 text-xs hover:bg-white/10"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container flex flex-col gap-2 py-5 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© ২০২৬ দৈনিক প্রভাত। সর্বস্বত্ব সংরক্ষিত। সম্পাদক: আহমেদ রফিক</p>
            <p>
              অনুমতি ছাড়া এই ওয়েবসাইটের কোনো লেখা, ছবি বা ভিডিও ব্যবহার করা
              যাবে না।
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
