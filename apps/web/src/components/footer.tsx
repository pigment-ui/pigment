"use client";

import { LinkedinIcon } from "lucide-react";
import { Button } from "pigment-ui";

export function Footer() {
  return (
    <footer className="border-t-default-1000/20 flex h-24 w-full items-center border-t">
      <div className="container flex items-center justify-between">
        <p className="text-default-500 text-sm">&copy; 2025 Pigment UI</p>

        <Button aria-label="linkedin url" asChild isCompact variant="light" radius="full" className="[&:not(:hover)]:text-default-500">
          <a href="https://www.linkedin.com/company/pigment-ui" target="_blank">
            <LinkedinIcon />
          </a>
        </Button>
      </div>
    </footer>
  );
}
