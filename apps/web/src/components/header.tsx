"use client";

import { capitalize } from "inflection";
import { GithubIcon, MenuIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button, Menu, MenuItem, MenuTrigger, Popover, PopoverTrigger } from "pigment-ui";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Header() {
  const segment = useSelectedLayoutSegment();

  const routes = [
    ["/docs/overview/introduction", "Docs"],
    // ["/examples", "Examples"],
    ["/themes", "Themes"],
  ].map(([href, title]) => (
    <Button
      key={title}
      asChild
      variant={href.split("/")[1] === segment ? "soft" : "light"}
      className={twMerge(href.split("/")[1] !== segment && "text-default-500", "justify-start")}
    >
      <NextLink href={href} prefetch onClick={() => setIsOpened(false)}>
        {title}
      </NextLink>
    </Button>
  ));

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <header className="border-default-1000/20 bg-default-0/75 sticky top-0 z-50 h-16 w-full border-b backdrop-blur-lg">
      <div className="container flex h-full items-center gap-x-8">
        <Button asChild variant={segment === null ? "soft" : "light"} isCompact>
          <NextLink href="/" prefetch>
            <img src="/logo.png" alt="logo" className="size-16 invert dark:invert-0" />
          </NextLink>
        </Button>

        <div className="flex gap-x-2 max-lg:hidden">{routes}</div>

        <div className="ml-auto flex gap-x-2">
          <Button aria-label="github repo" asChild isCompact variant="faded">
            <a href="https://github.com/pigment-ui" target="_blank">
              <GithubIcon />
            </a>
          </Button>

          <MenuTrigger>
            <Button aria-label="theme menu" isCompact variant="faded">
              {mounted ? theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <MonitorIcon /> : <MonitorIcon />}
            </Button>
            <Menu
              selectionMode="single"
              selectedKeys={new Set([capitalize(theme ?? "system")])}
              onSelectionChange={(key) => setTheme((Array.from(key)[0] as string).toLowerCase())}
              placement="bottom end"
              className="w-32"
              disallowEmptySelection
            >
              <MenuItem>Light</MenuItem>
              <MenuItem>Dark</MenuItem>
              <MenuItem>System</MenuItem>
            </Menu>
          </MenuTrigger>

          <PopoverTrigger isOpen={isOpened} onOpenChange={setIsOpened}>
            <Button aria-label="header menu toggle" isCompact variant="faded" className="lg:hidden">
              <MenuIcon />
            </Button>
            <Popover className="flex w-48 flex-col gap-y-2">{routes}</Popover>
          </PopoverTrigger>
        </div>
      </div>
    </header>
  );
}
