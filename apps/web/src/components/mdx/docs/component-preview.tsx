"use client";

import preview from "#/preview";
import { CodeBlock } from "../shared";
import * as ui from "pigment-ui";
import { useState } from "react";
import { LiveError, LivePreview, LiveProvider } from "react-live";

export function filterPreviewCode(code: string) {
  return code
    .split("\n")
    .filter((line) => !line.includes("import"))
    .join("\n");
}

export function ComponentPreview({ slug }: { slug: string }) {
  const name = slug.split("/")[0] || "";
  const section = slug.split("/")[1] || "";
  const code = preview?.[name]?.[section]?.code ?? "";
  const scope = preview?.[name]?.[section]?.scope ?? {};

  const [previewCode, setPreviewCode] = useState<string>(filterPreviewCode(code));

  return (
    <div>
      <div>
        <LiveProvider code={previewCode} scope={{ ...ui, ...scope }}>
          <div className="[&>div]:border-default-1000/20 [&>div]:bg-default-0/50 [&>div]:grid [&>div]:min-h-64 [&>div]:place-items-center [&>div]:overflow-auto [&>div]:rounded-t-xl [&>div]:border [&>div]:border-b-0 [&>div]:p-8 [&>div]:backdrop-blur-xl">
            <LivePreview />
          </div>
          <div>
            <LiveError className="border-error-700/20 bg-error-100/50 text-error-500 overflow-auto border border-b-0 p-4 text-sm backdrop-blur-xl" />
          </div>
          <CodeBlock code={code} setCode={(value) => setPreviewCode(filterPreviewCode(value))} language="tsx" canEdit className="rounded-t-none" />
        </LiveProvider>
      </div>
    </div>
  );
}
