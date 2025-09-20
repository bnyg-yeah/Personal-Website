// website-on-next/src/pages/Resume.tsx

import Layout from "../components/Layout";
import { useMemo } from "react"; // used to compute/cache small constants

export default function Resume() {
  // 1) Stable URL to your PDF (cached so it never recomputes)
  const pdfURL = useMemo(() => "/assets/Brighton-Young-Resume.pdf", []);

  // 2) Aspect ratio, through trial and error, 11.33x15.30 does not allow for embedded scrolling 
  const PAGE_ASPECT = useMemo(() => "11.33 / 15.30", []);

  return (
    <Layout
      title="Résumé"
      subtitle="Available for embedded web view and PDF download."
    >
      {/* Action bar: equal-width buttons, centered group */}
      <div>
        {/* Constrain the total width of the button pair so they look tidy */}
        <div className="mx-auto mb-4 flex max-w-md gap-3">
          <a
            href={pdfURL}
            download="Brighton-Young-Resume.pdf"
            className="flex-1 inline-flex items-center justify-center rounded-md border border-white/30 py-2 text-sm text-white hover:bg-white/10"
          >
            Download PDF
          </a>

          <a
            href={pdfURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-md border border-white/30 py-2 text-sm text-white hover:bg-white/10"
          >
            Open in new tab
          </a>
        </div>
      </div>

      {/* Outer wrapper limits the readable width */}
      <div className="mx-auto w-full max-w-3xl px-3">
        {/* The magic: size the <object> by aspect-ratio so it grows as tall as a full page.
            No fixed vh; no inner scrollbars. The page itself will scroll. */}
        <object
          data={pdfURL} // points to the PDF file
          type="application/pdf" // lets the browser render it as PDF
          aria-label="Resume PDF viewer"
          className="
            block                        /* removes inline gap */
            w-full                       /* fill the container width */
            rounded-md border border-white/20 shadow-xl
            
            overflow-hidden              /* hide any tiny internal scrollbars/toolbars overflow */
            bg-black/10                  /* subtle background so edges feel intentional */
          "
          // aspect-ratio is width / height; browser computes height from width.
          // With US Letter (8.5/11), height ≈ 1.294 × width, which fits a full page.
          style={{ aspectRatio: PAGE_ASPECT }}
        >
          {/* Fallback if inline PDFs aren’t supported */}
          {/* Found a problem on iOS Safari where the embed pdf will display the pdf with a transparent background, i dont think its fixable with code? */}
          <p className="text-white/90">
            Your browser can’t display PDFs inline.{" "}
            <a
              className="underline"
              href={pdfURL}
              target="_blank"
              rel="noreferrer"
            >
              Click here to open the résumé
            </a>{" "}
            or use the download button above.
          </p>
        </object>
      </div>
    </Layout>
  );
}
