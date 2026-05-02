"use client";

import React from "react";

export default function WhatsAppWidget() {
  const phone = "+917020455546";
  const message = encodeURIComponent(
    "Hi Omkar, I'm interested in your programs and would like to learn more."
  );
  const href = `https://wa.me/917020455546?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg flex items-center justify-center text-white text-xl transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7">
        <path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .02 4.83.02 11.08c0 1.95.51 3.86 1.48 5.56L0 24l7.7-2.02a11.1 11.1 0 0 0 4.3.85h.01c6.63 0 11.99-4.83 11.99-11.08 0-2.97-1.16-5.75-3.18-7.32zM12 21.5a9.7 9.7 0 0 1-3.92-.8l-.28-.12-4.58 1.2 1.22-4.43-.16-.28A9.16 9.16 0 0 1 2.83 11.1 9.98 9.98 0 1 1 12 21.5zm5.3-7.9c-.29-.14-1.72-.85-1.99-.95-.27-.1-.47-.14-.67.14-.2.29-.78.95-.96 1.15-.18.2-.36.22-.66.08-.3-.14-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.28-.02-.43.12-.57.12-.12.27-.31.4-.47.13-.15.17-.25.28-.42.1-.17.05-.32-.03-.46-.08-.14-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.32-.28.24-1.07 1.04-1.07 2.54 0 1.5 1.1 2.95 1.25 3.15.15.2 2.16 3.3 5.24 4.62 3.08 1.33 3.08.89 3.64.83.57-.06 1.82-.73 2.08-1.44.26-.71.26-1.32.18-1.44-.08-.12-.29-.17-.59-.31z"/>
      </svg>
    </a>
  );
}
