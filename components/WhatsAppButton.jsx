export default function WhatsAppButton() {
  const phone = "5587991329721";
  const message = encodeURIComponent(
    "Olá, João Paulo! Vim pelo seu portfólio e gostaria de conversar."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="whatsapp-float grid place-items-center rounded-full text-white transition hover:scale-110"
      style={{
        position: "fixed",
        right: "clamp(14px, 4vw, 22px)",
        bottom: "clamp(14px, 4vw, 22px)",
        zIndex: 2147483647,
        width: "clamp(56px, 14vw, 64px)",
        height: "clamp(56px, 14vw, 64px)",
        background: "#25D366",
        border: "4px solid #ffffff",
        boxShadow:
          "0 18px 45px rgba(37, 211, 102, 0.42), 0 8px 18px rgba(0,0,0,0.12)",
      }}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 fill-current">
        <path d="M16.03 3.01c-7.12 0-12.91 5.78-12.91 12.9 0 2.27.6 4.49 1.74 6.43L3 29l6.82-1.79a12.86 12.86 0 0 0 6.2 1.58h.01c7.12 0 12.91-5.78 12.91-12.9S23.15 3.01 16.03 3.01Zm0 23.59h-.01c-1.96 0-3.88-.53-5.56-1.52l-.4-.24-4.04 1.06 1.08-3.94-.26-.41a10.65 10.65 0 0 1-1.63-5.64c0-5.91 4.81-10.71 10.73-10.71 2.86 0 5.55 1.12 7.57 3.14a10.64 10.64 0 0 1 3.14 7.57c0 5.91-4.8 10.69-10.62 10.69Zm5.89-8.01c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.51-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.59-1.59-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55l-.62-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.27 3.46 5.49 4.85.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.14-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}
