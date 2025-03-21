"use client";

import { capitalize } from "inflection";
import { MenuIcon, MonitorIcon, MoonIcon, SparklesIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
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
        <Button asChild variant={segment === "docs" ? "soft" : "light"} radius="full" className={twMerge(segment !== "docs" && "text-default-500")}>
          <NextLink href="/docs/overview/introduction" prefetch onClick={() => setIsOpened(false)}>
            Docs
          </NextLink>
        </Button>

        <Button asChild variant={segment === "playground" ? "shadow" : "animated"} radius="full" startContent={<SparklesIcon />}>
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
    <header className="bg-default-0/75 sticky top-0 z-50 my-2 w-full backdrop-blur-lg">
      <div className="border-default/20 container flex h-20 justify-between border py-2">
        <NextLink
          href="/"
          prefetch
          className={twMerge(
            "border-default/20 focus-visible:outline-focus hover:bg-default/10 h-full overflow-hidden rounded-full border duration-300 outline-none active:scale-95",
            segment === null && "bg-default/10",
          )}
        >
          <Image
            src="/logo.png"
            alt="logo"
            unoptimized
            height={64}
            width={64}
            className="pointer-events-none aspect-square h-full invert select-none dark:invert-0"
          />
        </NextLink>

        <div className="border-default/20 flex h-full items-center gap-x-2 rounded-full border px-4">
          <div className="flex gap-x-2 max-sm:hidden">{routes}</div>

          <div className="flex gap-x-2 max-sm:ml-auto">
            <MenuTrigger>
              <Button aria-label="theme menu" isCompact variant="faded" radius="full">
                {mounted ? theme === "light" ? <SunIcon /> : theme === "dark" ? <MoonIcon /> : <MonitorIcon /> : <MonitorIcon />}
              </Button>
              <Menu
                selectionMode="single"
                selectedKeys={new Set([capitalize(theme ?? "system")])}
                onSelectionChange={(key) => setTheme((Array.from(key)[0] as string).toLowerCase())}
                className="w-32"
                disallowEmptySelection
                offset={8}
                crossOffset={16}
                placement="bottom end"
              >
                <MenuItem>Light</MenuItem>
                <MenuItem>Dark</MenuItem>
                <MenuItem>System</MenuItem>
              </Menu>
            </MenuTrigger>

            <PopoverTrigger isOpen={isOpened} onOpenChange={setIsOpened}>
              <Button aria-label="header menu toggle" isCompact variant="faded" className="sm:hidden" radius="full">
                <MenuIcon />
              </Button>
              <Popover offset={8} crossOffset={16} hideArrow placement="bottom end" className="flex w-48 flex-col gap-2">
                {routes}
              </Popover>
            </PopoverTrigger>
          </div>
        </div>
      </div>
    </header>
  );
}
