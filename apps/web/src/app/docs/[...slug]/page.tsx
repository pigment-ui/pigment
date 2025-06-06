import { Content, Detail, NavLeft, NavRight } from "../../../components";
import { allDocs } from "contentlayer/generated";
import { capitalize } from "inflection";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const params = await props.params;

  const { slug } = params;

  const doc = allDocsSorted.find((doc) => doc.slug === slug.join("/"));

  return { title: slug[1] ? `Pigment UI | Docs - ${capitalize(slug[1])}` : "", description: doc?.description || "" };
}

export async function generateStaticParams() {
  return allDocsSorted.map((doc) => ({
    slug: doc.slug.split("/"),
  }));
}

export default async function Page(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;

  const { slug } = params;

  const doc = allDocsSorted.find((doc) => doc.slug === slug.join("/"));
  if (!doc) notFound();

  return (
    <>
      <main className="relative container max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-12">
        <NavLeft doc={doc} allDocs={allDocsSorted} />
        <Content doc={doc} allDocs={allDocsSorted} />
        <NavRight doc={doc} />
      </main>

      <Detail />
    </>
  );
}

const partFilter = (str: string) =>
  str
    .split("/")
    .map((slugPart) => (!isNaN(parseInt(slugPart.slice(0, 2))) ? slugPart.slice(3) : slugPart))
    .join("/");

const allDocsSorted = allDocs
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((doc) => ({ ...doc, slug: partFilter(doc.slug), url: partFilter(doc.url) }));
