"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Button } from "pigment-ui";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-screen py-2">
      <div className="bg-default/10 container flex items-center justify-between rounded-full p-2">
        <Button variant="card" className="size-12 rounded-full p-0" asChild>
          <NextLink href="/" prefetch>
            <Image
              src="/logo.png"
              alt="logo"
              unoptimized
              height={64}
              width={64}
              className="pointer-events-none size-full invert select-none dark:invert-0"
            />
          </NextLink>
        </Button>

        <Button variant="card" className="size-12 rounded-full p-0">
          RH
        </Button>
      </div>
    </header>
  );
}
