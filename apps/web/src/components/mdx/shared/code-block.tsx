"use client";

import { CopyCheckIcon, CopyIcon } from "lucide-react";
import { Button, Spinner } from "pigment-ui";
import { useEffect, useState } from "react";
import { LiveEditor } from "react-live";
import { twMerge } from "tailwind-merge";

const customTheme = {
  plain: {},
  styles: [
    // Keywords, control flow, and operators (Darker shade)
    {
      types: ["keyword", "control-flow", "operator"],
      style: { color: "oklch(var(--pigment-default-900))" }, // Darker for structure
    },

    // Functions and methods (Medium shade)
    {
      types: ["function", "function-call", "method"],
      style: { color: "oklch(var(--pigment-default-700))" }, // Medium for functions
    },

    // Classes and types (Darker shade)
    {
      types: ["class-name", "type"],
      style: { color: "oklch(var(--pigment-default-900))" }, // Darker for classes/types
    },

    // Variables and properties (Medium shade)
    {
      types: ["variable", "property"],
      style: { color: "oklch(var(--pigment-default-600))" }, // Medium for variables
    },

    // Imports, exports, and modules (Lighter shade)
    {
      types: ["import", "export", "module"],
      style: { color: "oklch(var(--pigment-default-400))" }, // Lighter for imports/exports
    },

    // Comments (Lightest shade with italics)
    {
      types: ["comment"],
      style: { color: "oklch(var(--pigment-default-300))" }, // Lightest for comments
    },

    // Strings, numbers, and literals (Medium shade)
    {
      types: ["string", "number", "boolean", "null", "undefined"],
      style: { color: "oklch(var(--pigment-default-500))" }, // Medium for literals
    },

    // Punctuation and special syntax (Darker shade)
    {
      types: ["punctuation", "regex", "selector", "at-rule", "important"],
      style: { color: "oklch(var(--pigment-default-800))" }, // Darker for special syntax
    },
  ],
};

export function CodeBlock({
  code: propsCode,
  setCode: setPropsCode,
  language,
  canEdit = false,
  className,
}: {
  code: string;
  setCode?: (code: string) => void;
  language?: string;
  canEdit?: boolean;
  className?: string;
}) {
  const [code, setCode] = useState<string>(propsCode.trim());

  useEffect(() => {
    setCode(propsCode.trim());
  }, [propsCode]);

  const [copyTrigger, setCopyTrigger] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    const clickTimeout = setTimeout(() => setIsCopied(false), 1000);
    return () => clearTimeout(clickTimeout);
  }, [copyTrigger]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="group relative">
      {!mounted && (
        <div className="absolute top-1/2 left-1/2 -translate-x-8 -translate-y-8">
          <Spinner className="size-16" />
        </div>
      )}

      <div
        className={twMerge(
          "scrollbar-show-on-hover border-default/20 bg-default-50 text-default focus-within:ring-default-1000 max-h-96 w-full overflow-auto rounded-xl border font-mono text-sm duration-300 focus-within:ring-2",
          className,
        )}
      >
        <LiveEditor
          code={code}
          onChange={(value) => {
            setCode(value);
            setPropsCode?.(value);
          }}
          language={language ?? ""}
          disabled={!canEdit}
          tabMode="focus"
          theme={mounted ? customTheme : undefined}
          className={twMerge(
            "w-fit min-w-full duration-300 [&>pre]:!bg-transparent [&>pre]:!p-4",
            mounted ? canEdit && "[&_pre]:!whitespace-nowrap" : "blur-lg [&_*]:!text-transparent",
          )}
        />
      </div>

      <Button
        isCompact
        variant="light"
        size="sm"
        className="absolute top-2.5 right-2.5 hidden backdrop-blur-lg group-hover:block"
        onPress={() =>
          navigator.clipboard
            .writeText(code)
            .then(() => setIsCopied(true))
            .then(() => setCopyTrigger((prev) => prev + 1))
        }
      >
        {isCopied ? <CopyCheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  );
}
