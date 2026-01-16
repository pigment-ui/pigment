import DocsClient from "./_components";
import { allDocs } from "contentlayer/generated";
import { capitalize } from "inflection";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  const doc = allDocsSorted.find((d) => d.slug === slug.join("/"));

  return { title: slug[1] ? `Pigment UI | Docs - ${capitalize(slug[1])}` : "", description: doc?.description || "" };
}

export async function generateStaticParams() {
  return allDocsSorted.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;

  const doc = allDocsSorted.find((d) => d.slug === slug.join("/"));
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