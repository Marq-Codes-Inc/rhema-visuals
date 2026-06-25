"use client";

export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/256755311193"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/whatsapp-white-icon.svg"
        alt="WhatsApp"
        className="w-5 h-5"
      />
    </a>
  );
}
