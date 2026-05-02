import React from "react";

export function IconThoughts({ className = "w-8 h-8 text-primary" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 15a4 4 0 0 0-4-4H9a4 4 0 1 0 0 8h9v-1a3 3 0 0 0-3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 6a4 4 0 1 1 0 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFire({ className = "w-8 h-8 text-primary" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2s1.8 2.2 1.8 4.2c0 2-1.8 3.1-1.8 6.6 0 3.4 2.6 4.8 3.6 5.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 10.5C8 7.5 10 6 11 5c0 0-1 3 1 5 2 2.3 1 6 1 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAnxious({ className = "w-8 h-8 text-primary" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 10h.01M16 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 15c1-1 3-1 5 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconHourglass({ className = "w-8 h-8 text-primary" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 2h12M6 22h12M8 6h8M8 18h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 8c-2 2-3 2.5-3 4s1 2 3 4c2-2 3-2.5 3-4s-1-2-3-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDove({ className = "w-8 h-8 text-primary" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M2 12s4-4 8-4 6 2 8 2 4 0 4 4-4 6-8 6-6-2-8-4-4-4-4-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconProgram({ className = "w-10 h-10 text-primary" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export const ICONS: Record<string, React.FC<{ className?: string }>> = {
  thoughts: (props) => <IconThoughts {...props} />,
  fire: (props) => <IconFire {...props} />,
  anxious: (props) => <IconAnxious {...props} />,
  hourglass: (props) => <IconHourglass {...props} />,
  dove: (props) => <IconDove {...props} />,
  program: (props) => <IconProgram {...props} />,
};

export default ICONS;
