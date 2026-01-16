"use client";

import { Content, Detail, NavLeft, NavRight } from "#/components";

export default function DocsClient({ doc, allDocs }: any) {
  return (
    <>
      <main className="relative container max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-12">
        <NavLeft doc={doc} allDocs={allDocs} />
        <Content doc={doc} allDocs={allDocs} />
        <NavRight doc={doc} />
      </main>
      <Detail />
    </>
  );
}
