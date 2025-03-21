"use client";

import { Doc } from "contentlayer/generated";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import NextLink from "next/link";
import { Button } from "pigment-ui";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function NavLeft({ doc: docProps, allDocs }: { doc: Doc; allDocs: Doc[] }) {
  const docGroupNames = Array.from(new Set(allDocs.map((doc) => doc.slug.split("/")[0])));

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="border-default/20 bg-default-50 sticky top-[88px] z-10 border max-lg:top-[80px] max-lg:-mx-4 max-lg:-mt-2 max-lg:mb-4 lg:col-span-2 lg:h-[calc(100vh-96px)]">
      <button
        className="border-b-default-1000/20 bg-default-0/75 hover:bg-default-1000/10 active:bg-default-1000/20 flex w-full items-center gap-2 border-b p-4 text-start backdrop-blur-lg lg:hidden [&>svg]:size-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
        Menu
      </button>

      <div
        className={twMerge([
          "scrollbar-show-on-hover h-full overflow-y-auto p-4",
          "max-lg:absolute max-lg:inset-x-0 max-lg:top-full max-lg:h-[calc(100vh-140px)]",
          "max-lg:bg-default-0/75 max-lg:backdrop-blur-lg",
          !isOpen && "max-lg:hidden",
        ])}
      >
        {docGroupNames.map((docGroupName) => (
          <div key={docGroupName} className="mt-8 first:mt-0">
            <h3 className="text-sm font-medium uppercase">{docGroupName}</h3>
            <ul className="mt-2 flex flex-col gap-y-1">
              {allDocs
                .filter((doc) => doc.slug.split("/")[0] === docGroupName)
                .map((doc) => (
                  <li key={doc.slug}>
                    <Button
                      asChild
                      isCompact
                      variant={doc.slug === docProps.slug ? "soft" : "light"}
                      className={twMerge("w-full", doc.slug !== docProps.slug && "text-default-500", "justify-start")}
                    >
                      <NextLink href={doc.url} prefetch>
                        {doc.title}
                      </NextLink>
                    </Button>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
