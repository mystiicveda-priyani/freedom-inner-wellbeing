import React from "react";

export function IconInstagram({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8.5 10.5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="currentColor" />
      <path d="M12.5 13.5v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12.5 8.5v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconGoogle({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21.6 12.2c0-.7-.1-1.3-.3-1.9H12v3.6h5.5c-.2 1.2-.9 2.2-1.9 2.9v2.4h3.1c1.8-1.7 2.9-4.1 2.9-6.9z" fill="currentColor" />
      <path d="M12 22c2.7 0 5-0.9 6.7-2.5l-3.1-2.4c-.9.6-2 1-3.6 1-2.8 0-5.2-1.9-6.1-4.5H2.6v2.8C4.3 19.8 7.9 22 12 22z" fill="currentColor" />
      <path d="M5.9 13.1c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V6.1H2.6C1 8.2 0 10.9 0 13.1s1 4.9 2.6 7l3.3-2.9z" fill="currentColor" />
      <path d="M12 4.6c1.5 0 2.8.5 3.8 1.5l2.8-2.8C17 1.8 14.7 1 12 1 7.9 1 4.3 3.2 2.6 6.1l3.3 2.8C6.8 6.6 9.2 4.6 12 4.6z" fill="currentColor" />
    </svg>
  );
}

export function IconWhatsApp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 .02 4.83.02 11.08c0 1.95.51 3.86 1.48 5.56L0 24l7.7-2.02a11.1 11.1 0 0 0 4.3.85h.01c6.63 0 11.99-4.83 11.99-11.08 0-2.97-1.16-5.75-3.18-7.32z" stroke="currentColor" strokeWidth="0.8" />
      <path d="M17.3 14.1c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.1-.3.2-.5.1-.2 0-.4-.1-.6-.1-.2-.8-1.7-1-2.4-.3-.6-.6-.5-.8-.5l-.7-.0c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.6 2.7 3.8 3.8 2.2 1.1 2.2.7 2.6.7.3-.1 1-.5 1.1-1 .2-.5.2-.9.1-1-.1-.1-.2-.2-.4-.3z" fill="currentColor" />
    </svg>
  );
}

export default null;
