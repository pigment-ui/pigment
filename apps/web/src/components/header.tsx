"use client";

import { capitalize } from "inflection";
import { GithubIcon, MenuIcon, MonitorIcon, MoonIcon, SparklesIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button, Menu, MenuItem, MenuTrigger, Popover, PopoverTrigger } from "pigment-ui";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

export function Header() {
  const segment = useSelectedLayoutSegment();

  const routes = useMemo(
    () => (
      <>
        <Button asChild variant={segment === "docs" ? "soft" : "light"} className={twMerge(segment !== "docs" && "text-default-500")}>
          <NextLink href="/docs/overview/introduction" prefetch onClick={() => setIsOpened(false)}>
            Docs
          </NextLink>
        </Button>

        <Button asChild variant={segment === "playground" ? "shadow" : "animated"} startContent={<SparklesIcon />}>
          <NextLink href="/playground" prefetch onClick={() => setIsOpened(false)}>
            Playground
          </NextLink>
        </Button>
      </>
    ),
    [segment],
  );

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <header className="border-default-1000/20 bg-default-0/75 sticky top-0 z-50 h-16 w-full border-b backdrop-blur-lg">
      <div className="container flex h-full items-center">
        <Button asChild variant={segment === null ? "soft" : "light"} isCompact>
          <NextLink href="/" prefetch>
            <img src="/logo.png" alt="logo" className="size-16 invert dark:invert-0" />
          </NextLink>
        </Button>

        <div className="flex flex-1 justify-between gap-x-2 pr-2 pl-8 max-sm:hidden">{routes}</div>

        <div className="flex gap-x-2 max-sm:ml-auto">
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
            <Button aria-label="header menu toggle" isCompact variant="faded" className="sm:hidden">
              <MenuIcon />
            </Button>
            <Popover className="flex w-48 flex-col gap-2">{routes}</Popover>
          </PopoverTrigger>
        </div>
      </div>
    </header>
  );
}
