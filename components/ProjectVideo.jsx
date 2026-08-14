"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

/**
 * YouTube preview card: shows the thumbnail, autoplays a muted loop on
 * hover, and opens a fullscreen modal with the real player on click.
 */
export default function ProjectVideo({ youtubeId, title = "Vídeo do projeto" }) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  if (!youtubeId) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border bg-background-elevated"
        aria-label={`Assistir vídeo: ${title}`}
      >
        {hovered ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0`}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        ) : (
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 opacity-100 transition-opacity group-hover:opacity-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
            <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
          </div>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Fechar vídeo"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="aspect-video w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={title}
              className="h-full w-full rounded-lg"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              frameBorder="0"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
