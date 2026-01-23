import React from 'react';
import { CONTACT, LAST_UPDATED, VERSION } from '@/lib/resume-data';

function Footer() {
  return (
    <footer className="border-t border-border py-4 text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <a
            href={CONTACT.github.repoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm underline"
          >
            <span>Github</span>
          </a>
          <span>/</span>
          <span>v{VERSION}</span>
          <span>/</span>
          <span>Last Updated: {LAST_UPDATED}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
