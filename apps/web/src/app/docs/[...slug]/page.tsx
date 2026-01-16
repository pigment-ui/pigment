import DocsClient from "./_components";
import { allDocs } from "contentlayer/generated";
import { capitalize } from "inflection";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const slugArray = params.slug ?? [];
  const doc = allDocsSorted.find((d) => d.slug === slugArray.join("/"));

  return {
    title: slugArray[1] ? `Pigment UI | Docs - ${capitalize(slugArray[1])}` : "",
    description: doc?.description || "",
  };
}

export async function generateStaticParams() {
  return allDocsSorted.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  const slugArray = params.slug ?? [];
  const doc = allDocsSorted.find((d) => d.slug === slugArray.join("/"));
  if (!doc) notFound();

  return <DocsClient doc={doc} allDocs={allDocsSorted} />;
}

const partFilter = (str: string) =>
  str
    .split("/")
    .map((p) => (!isNaN(parseInt(p.slice(0, 2))) ? p.slice(3) : p))
    .join("/");

const allDocsSorted = allDocs
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((doc) => ({ ...doc, slug: partFilter(doc.slug), url: partFilter(doc.url) }));