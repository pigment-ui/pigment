"use client";

import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "pigment-ui";

export function Footer() {
  return (
    <header className="sticky inset-x-0 top-0 w-screen py-2">
      <div className="border-t-default/20 container flex items-center justify-between border-t py-4">
        <p className="text-default-500 text-sm">&copy; 2025 Pigment UI</p>

        <div className="flex gap-2">
          <Button size="sm" aria-label="github url" asChild isCompact variant="ghost" radius="full" className="[&:not(:hover)]:text-default-500">
            <a href="https://github.com/pigment-ui" target="_blank">
              <GithubIcon />
            </a>
          </Button>
          <Button size="sm" aria-label="linkedin url" asChild isCompact variant="ghost" radius="full" className="[&:not(:hover)]:text-default-500">
            <a href="https://www.linkedin.com/company/pigment-ui" target="_blank">
              <LinkedinIcon />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
