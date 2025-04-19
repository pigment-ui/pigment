"use client";

import preview from "#/preview";
import { filterPreviewCode } from "./component-preview";
import { CopyCheckIcon, CopyIcon } from "lucide-react";
import * as ui from "pigment-ui";
import { useEffect } from "react";
import { useState } from "react";
import { LivePreview, LiveProvider } from "react-live";

export function ComponentCard({ title, scale = 1, slug }: { title: string; scale?: number; slug: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copyTrigger, setCopyTrigger] = useState<number>(0);

  const name = slug.split("/")[0] || "";
  const section = slug.split("/")[1] || "";
  const code = preview?.[name]?.[section]?.code ?? "";
  const scope = preview?.[name]?.[section]?.scope ?? {};

  const [previewCode] = useState<string>(filterPreviewCode(code));

  useEffect(() => {
    const clickTimeout = setTimeout(() => setIsCopied(false), 1000);
    return () => clearTimeout(clickTimeout);
  }, [copyTrigger]);

  return (
    <div className="border-default/10 bg-default-100 w-full rounded-lg border p-2">
      <div className="group bg-default-50 border-default/20 relative flex h-30 items-center justify-center overflow-hidden rounded-md border">
        <ui.Button
          isCompact
          variant="light"
          size="sm"
          className="absolute top-2 right-2 hidden backdrop-blur-lg group-hover:block"
          onPress={() =>
            navigator.clipboard
              .writeText(code)
              .then(() => setIsCopied(true))
              .then(() => setCopyTrigger((prev) => prev + 1))
          }
        >
          {isCopied ? <CopyCheckIcon /> : <CopyIcon />}
        </ui.Button>
        <div style={{ transform: `scale(${scale})` }}>
          <div>
            <div>
              <LiveProvider code={previewCode} scope={{ ...ui, ...scope }}>
                <LivePreview />
              </LiveProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="ps-2 pt-2 pb-0.5">
        <div className="text-sm font-medium">{title}</div>
      </div>
    </div>
  );
}
