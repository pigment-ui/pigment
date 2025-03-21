"use client";

import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "pigment-ui";

export function Footer() {
  return (
    <footer className="my-2">
      <div className="border-default/20 bg-default-0/75 container flex justify-between border py-2 backdrop-blur-lg">
        <p className="text-default-500 border-default/20 rounded-full border p-6 text-sm">&copy; 2025 Pigment UI</p>

        <div className="border-default/20 flex items-center gap-x-2 rounded-full border px-4">
          <Button aria-label="github url" asChild isCompact variant="ghost" radius="full" className="[&:not(:hover)]:text-default-500">
            <a href="https://github.com/pigment-ui" target="_blank">
              <GithubIcon />
            </a>
          </Button>
          <Button aria-label="linkedin url" asChild isCompact variant="ghost" radius="full" className="[&:not(:hover)]:text-default-500">
            <a href="https://www.linkedin.com/company/pigment-ui" target="_blank">
              <LinkedinIcon />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
