import React from "react";

function TopBar() {
  return (
    <>
      <div className="hidden border-b border-line bg-paper text-xs text-ink/70 md:block">
        <div className="container flex h-9 items-center justify-between">
          <span data-today>বৃহস্পতিবার, ২২ অক্টোবর ২০২৬</span>
          <div className="flex items-center gap-4">
            <a
              href="epaper.html"
              className="inline-flex items-center gap-1 hover:text-brand-600"
            >
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
                <path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2" />
                <path d="M7 9h7M7 13h7M7 16h4" />
              </svg>
              ই-পেপার
            </a>
            <a
              href="my-area.html"
              className="inline-flex items-center gap-1 hover:text-brand-600"
            >
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
                <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              আমার এলাকা
            </a>
            <a
              href="archive.html"
              className="inline-flex items-center gap-1 hover:text-brand-600"
            >
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
              আর্কাইভ
            </a>
            <a
              href="#"
              className="font-sans font-semibold hover:text-brand-600"
            >
              English
            </a>
            <span className="h-4 w-px bg-line"></span>

            <div className="flex items-center gap-1.5">
              <a
                href="#"
                className="inline-grid size-7 place-items-center rounded-full hover:bg-black/10"
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
                className="inline-grid size-7 place-items-center rounded-full hover:bg-black/10"
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
                className="inline-grid size-7 place-items-center rounded-full hover:bg-black/10"
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
                className="inline-grid size-7 place-items-center rounded-full hover:bg-black/10"
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
                className="inline-grid size-7 place-items-center rounded-full hover:bg-black/10"
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
    </>
  );
}

export default TopBar;
