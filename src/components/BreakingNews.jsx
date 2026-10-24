import React from "react";

function BreakingNews() {
  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="container flex items-center gap-3 overflow-hidden py-2 text-sm">
          <span className="inline-flex shrink-0 items-center gap-1 rounded bg-brand-600 px-2 py-1 text-xs font-bold text-white">
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
              <path d="M13 3 5 13h6l-1 8 8-10h-6z" />
            </svg>
            ব্রেকিং
          </span>
          <div className="ticker relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_2rem,black_calc(100%-2rem),transparent)]">
            <div className="ticker-track flex w-max gap-10">
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>
                উপকূলীয় জেলাগুলোতে তিন নম্বর সতর্কসংকেত
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>
                জাপানে ৬.৯ মাত্রার ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>
                এসএসসিতে পাসের হার ৮৩ শতাংশ
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>শেষ
                ওভারের রোমাঞ্চে জিতল বাংলাদেশ
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
                aria-hidden="true"
                tabIndex="-1"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>
                উপকূলীয় জেলাগুলোতে তিন নম্বর সতর্কসংকেত
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
                aria-hidden="true"
                tabIndex="-1"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>
                জাপানে ৬.৯ মাত্রার ভূমিকম্প, সুনামি সতর্কতা প্রত্যাহার
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
                aria-hidden="true"
                tabIndex="-1"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>
                এসএসসিতে পাসের হার ৮৩ শতাংশ
              </a>
              <a
                href="latest.html"
                className="inline-flex items-center gap-2 hover:text-brand-600"
                aria-hidden="true"
                tabIndex="-1"
              >
                <span className="size-1.5 rounded-full bg-brand-600"></span>শেষ
                ওভারের রোমাঞ্চে জিতল বাংলাদেশ
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BreakingNews;
