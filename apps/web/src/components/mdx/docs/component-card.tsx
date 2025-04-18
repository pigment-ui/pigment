"use client";

import preview from "#/preview";
import { filterPreviewCode } from "./component-preview";
import * as ui from "pigment-ui";
import { ReactNode } from "react";
import { useState } from "react";
import { LivePreview, LiveProvider } from "react-live";

export function ComponentCard({ title, scale = 1, children }: { title: string; scale?: number; children?: ReactNode }) {
  return (
    <div className="border-default/10 bg-default-100 w-full rounded-lg border p-2">
      <div className="bg-default-50 border-default/20 flex h-30 items-center justify-center overflow-hidden rounded-md border">
        <div style={{ transform: `scale(${scale})` }}>{children}</div>
      </div>
      <div className="ps-2 pt-2 pb-0.5">
        <div className="text-sm font-medium">{title}</div>
      </div>
    </div>
  );
}

export function LiveComponent({ slug }: { slug: string }) {
  const name = slug.split("/")[0] || "";
  const section = slug.split("/")[1] || "";
  const code = preview?.[name]?.[section]?.code ?? "";
  const scope = preview?.[name]?.[section]?.scope ?? {};

  const [previewCode] = useState<string>(filterPreviewCode(code));

  return (
    <div>
      <div>
        <LiveProvider code={previewCode} scope={{ ...ui, ...scope }}>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
}
