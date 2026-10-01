import React, { useState } from "react";

const RESUME_PATH = "/Toufeeq_Mir_Resume%20(3).pdf";

function Resume() {
  const [showViewer, setShowViewer] = useState(false);
  const handleView = () => setShowViewer(true);

  return (
    <section
      id="resume"
      className="w-full min-h-screen py-16 bg-transparent text-slate-100 px-4 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Resume
            </h2>
            <p className="text-slate-200 mt-2 max-w-2xl">
              View it here or download the PDF.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleView}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-indigo-200 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              View Resume
            </button>

            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold transition"
            >
              Download
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 font-semibold transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 md:p-8">
          {!showViewer && (
            <div className="text-center">
              <p className="text-slate-200">
                Click <span className="font-semibold">View Resume</span> to open the PDF.
              </p>
            </div>
          )}

          {showViewer && (
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <p className="text-sm text-white/90 font-semibold">
                  Resume Preview
                </p>
                <button
                  type="button"
                  onClick={() => setShowViewer(false)}
                  className="text-sm text-white/70 hover:text-white transition"
                >
                  Hide
                </button>
              </div>

              <iframe
                title="Resume PDF"
                src={RESUME_PATH}
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
