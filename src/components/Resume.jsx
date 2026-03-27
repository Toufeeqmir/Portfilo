import React, { useEffect, useState } from "react";

function Resume() {
  const [isAvailable, setIsAvailable] = useState(null);
  const [showViewer, setShowViewer] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const validatePdf = async () => {
      try {
        // Range request lets us read only the first bytes.
        // A valid PDF always starts with: %PDF
        const res = await fetch("/resume.pdf", {
          method: "GET",
          cache: "no-store",
          headers: {
            Range: "bytes=0-4",
            Accept: "application/pdf,*/*",
          },
        });

        if (!res.ok) return false;

        const buf = await res.arrayBuffer();
        const bytes = new Uint8Array(buf);
        return (
          bytes.length >= 4 &&
          bytes[0] === 0x25 && // %
          bytes[1] === 0x50 && // P
          bytes[2] === 0x44 && // D
          bytes[3] === 0x46 // F
        );
      } catch {
        return false;
      }
    };

    validatePdf().then((ok) => {
      if (!cancelled) setIsAvailable(ok);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleView = async () => {
    setIsChecking(true);
    try {
      const res = await fetch("/resume.pdf", {
        method: "GET",
        cache: "no-store",
        headers: {
          Range: "bytes=0-4",
          Accept: "application/pdf,*/*",
        },
      });

      if (!res.ok) {
        setIsAvailable(false);
        setShowViewer(false);
        return;
      }

      const buf = await res.arrayBuffer();
      const bytes = new Uint8Array(buf);
      const ok =
        bytes.length >= 4 &&
        bytes[0] === 0x25 && // %
        bytes[1] === 0x50 && // P
        bytes[2] === 0x44 && // D
        bytes[3] === 0x46; // F

      setIsAvailable(ok);
      setShowViewer(ok);
    } catch {
      setIsAvailable(false);
      setShowViewer(false);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <section
      id="resume"
      className="w-full min-h-screen py-16 bg-transparent text-gray-900 px-4 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Resume</h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              View it here or download the PDF.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleView}
              disabled={isChecking}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-indigo-200 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isChecking ? "Checking..." : "View Resume"}
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold transition"
            >
              Download
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 font-semibold transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-6 md:p-8 shadow-sm">
          {isAvailable === null && (
            <div className="text-gray-600">Loading resume...</div>
          )}

          {isAvailable === false && (
            <div>
              <p className="text-indigo-700 font-semibold mb-2">resume.pdf not found</p>
              <p className="text-gray-600">
                Put your resume PDF at <span className="font-semibold">`my-app/public/resume.pdf`</span>{" "}
                and refresh the page.
              </p>
            </div>
          )}

          {isAvailable === true && !showViewer && (
            <div className="text-center">
              <p className="text-gray-600">
                Click <span className="font-semibold">View Resume</span> to open the PDF.
              </p>
            </div>
          )}

          {isAvailable === true && showViewer && (
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <p className="text-sm text-gray-800 font-semibold">Resume Preview</p>
                <button
                  type="button"
                  onClick={() => setShowViewer(false)}
                  className="text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  Hide
                </button>
              </div>
              <iframe
                title="Resume PDF"
                src="/resume.pdf"
                className="w-full"
                style={{ height: "70vh" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Resume;

