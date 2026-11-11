import React, { useState, useEffect, useCallback } from 'react';

/**
 * Wikipedia-authentic Image Thumbnail & MediaViewer
 * Conforms to Wikipedia Vector 2022 thumb specification with framed inner border,
 * subtle caption box, MediaViewer enlargement icon, multi-photo switching,
 * and a full-screen Wikipedia MediaViewer modal.
 */
export default function WikiThumbnail({ photos = [], contest, edition }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const currentPhoto = photos[activeIndex] || photos[0];

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  // Keyboard navigation for MediaViewer modal
  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsViewerOpen(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isViewerOpen, handlePrev, handleNext]);

  if (!photos || photos.length === 0) return null;

  return (
    <>
      {/* Wikipedia Thumbnail Figure (Right-aligned float on desktop) */}
      <figure
        aria-label={`Photograph from ${contest}`}
        className="sm:float-right sm:w-[270px] sm:ml-4 sm:mb-3 my-3 border border-[#c8ccd1] dark:border-[#54595d] bg-[#f8f9fa] dark:bg-[#27292d] p-1.5 text-xs rounded-[2px] shadow-xs select-none"
      >
        {/* Thumbnail Inner Image Box */}
        <div
          onClick={() => setIsViewerOpen(true)}
          className="border border-[#c8ccd1] dark:border-[#3c4043] bg-white dark:bg-[#202122] overflow-hidden cursor-pointer group relative"
          title="Click to enlarge (Wikipedia MediaViewer)"
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt || `${contest} photo`}
            className="w-full h-[180px] object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
        </div>

        {/* Multi-photo selector pills (if > 1 image) */}
        {photos.length > 1 && (
          <div className="flex items-center justify-between gap-1 mt-1.5 pt-1 border-t border-[#eaecf0] dark:border-[#3c4043] text-[11px]">
            <div className="flex items-center gap-1">
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-1.5 py-0.5 rounded-[2px] text-[10px] font-sans cursor-pointer transition-colors ${
                    activeIndex === idx
                      ? "bg-[#202122] text-white dark:bg-[#eaecf0] dark:text-black font-semibold"
                      : "bg-[#eaecf0] text-[#54595d] dark:bg-[#3c4043] dark:text-[#c8ccd1] hover:bg-[#dcdfe3] dark:hover:bg-[#4a4e52]"
                  }`}
                  title={p.title || `Photo ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[10.5px] text-[#54595d] dark:text-[#a2a9b1] font-mono">
              <span>{activeIndex + 1}/{photos.length}</span>
              <button
                type="button"
                onClick={handlePrev}
                className="px-1 text-[13px] leading-none hover:text-[#0645ad] dark:hover:text-[#6da8ff] cursor-pointer"
                title="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="px-1 text-[13px] leading-none hover:text-[#0645ad] dark:hover:text-[#6da8ff] cursor-pointer"
                title="Next image"
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Wikipedia Thumbnail Caption */}
        <figcaption className="mt-1.5 px-0.5 text-[11.5px] leading-snug text-[#54595d] dark:text-[#a2a9b1] font-sans">
          {/* Wikipedia Enlarge Magnify Icon */}
          <button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            className="float-right ml-1.5 p-0.5 text-[#54595d] dark:text-[#a2a9b1] hover:text-[#0645ad] dark:hover:text-[#6da8ff] cursor-pointer"
            title="Enlarge (Wikipedia MediaViewer)"
            aria-label="Enlarge image in Wikipedia MediaViewer"
          >
            <svg
              className="w-3.5 h-3.5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l3.293 3.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-3.293 3.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 9a1 1 0 012 0v1.586l3.293-3.293a1 1 0 011.414 1.414L6.414 17H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-3.293-3.293a1 1 0 011.414-1.414L15 14.586V13a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span>{currentPhoto.caption}</span>
        </figcaption>
      </figure>

      {/* Wikipedia MediaViewer Lightbox Modal */}
      {isViewerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Wikipedia MediaViewer"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex flex-col justify-between p-3 sm:p-5 text-white animate-in fade-in duration-150"
          onClick={() => setIsViewerOpen(false)}
        >
          {/* Top Bar: Title & Controls */}
          <div
            className="flex items-center justify-between border-b border-white/15 pb-2 text-xs sm:text-sm font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base tracking-tight text-white">
                Wikipedia MediaViewer
              </span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-300 hidden sm:inline">
                {contest} ({edition})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-mono">
                {activeIndex + 1} of {photos.length}
              </span>
              <button
                type="button"
                onClick={() => setIsViewerOpen(false)}
                className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white rounded text-xs font-semibold cursor-pointer transition-colors"
                title="Close viewer (Esc)"
              >
                ✕ Close
              </button>
            </div>
          </div>

          {/* Central Image View with Prev/Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center py-4 my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {photos.length > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl font-bold cursor-pointer transition-colors border border-white/20 select-none"
                title="Previous image (Left arrow)"
              >
                ‹
              </button>
            )}

            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt || contest}
              className="max-h-[68vh] max-w-[92vw] sm:max-w-[85vw] object-contain shadow-2xl rounded-[2px]"
            />

            {photos.length > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white text-2xl font-bold cursor-pointer transition-colors border border-white/20 select-none"
                title="Next image (Right arrow)"
              >
                ›
              </button>
            )}
          </div>

          {/* Bottom Panel: Caption, Metadata, & Thumbnails */}
          <div
            className="bg-black/75 border-t border-white/15 pt-2.5 px-3 rounded-b text-xs text-gray-200 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-[850px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <p className="font-medium text-sm text-white">
                  {currentPhoto.caption}
                </p>
                <p className="text-[11px] text-gray-400">
                  {contest} ({edition}) · Official photograph archived in engineer's wiki.
                </p>
              </div>

              {photos.length > 1 && (
                <div className="flex items-center gap-1.5 self-center sm:self-auto">
                  {photos.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-12 h-9 rounded overflow-hidden border transition-all cursor-pointer ${
                        activeIndex === idx
                          ? "border-[#6da8ff] ring-2 ring-[#6da8ff]/50 scale-105"
                          : "border-white/30 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={p.src}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
