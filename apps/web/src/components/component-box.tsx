"use client";

import { capitalize } from "inflection";
import Link from "next/link";
import { ReactNode } from "react";
import { mergeProps, useFocusRing, useHover, usePress } from "react-aria";
import { twMerge } from "tailwind-merge";

export function ComponentBox({ children, id }: { children: ReactNode; id: string }) {
  const { hoverProps, isHovered } = useHover({});
  const { pressProps, isPressed } = usePress({});
  const { focusProps, isFocusVisible } = useFocusRing({});

  return (
    <div className="border-default/20 odd:bg-default-50 relative flex h-[250px] items-center justify-center border">
      <Link
        href={"/docs/components/" + id}
        {...mergeProps(hoverProps, pressProps, focusProps)}
        className={twMerge([
          "bg-default-1000/10 absolute top-4 left-8 rounded-lg px-2 py-1 font-mono text-sm font-medium duration-300",
          isHovered && "bg-default-1000/20",
          isPressed && "scale-95",
          isFocusVisible ? "outline-default-1000 outline outline-1 outline-offset-1" : "outline-none",
        ])}
      >
        {"<"}
        {id.split("-").map((word) => capitalize(word))}
        {" />"}
      </Link>
      <div>{children}</div>
    </div>
  );
}
