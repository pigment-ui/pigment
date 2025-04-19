import { Colors, ComponentCard, ComponentPreview } from "./docs";
import { CodeBlock, Heading } from "./shared";
import { ApiTable } from "./shared/api-table";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="space-y-4 [&>h2]:mt-16! [&>h3]:mt-8!">
      <Component components={mdxComponents} />
    </div>
  );
}

const mdxComponents = {
  h2: ({ ...props }) => <Heading as="h2" {...props} />,
  h3: ({ ...props }) => <Heading as="h3" {...props} />,
  pre: ({ ...props }) => <CodeBlock code={props.children.props.children} language={props["data-language"]} />,
  code: ({ ...props }) => <code {...props} className="bg-default-1000/10 rounded-lg p-1 text-sm whitespace-nowrap" />,
  ul: ({ ...props }) => <ul {...props} className="list-disc space-y-2 px-4" />,
  Image: ({ ...props }) => (
    <Image src="" alt="" priority {...props} className={twMerge("border-default-1000/20 rounded-xl border", props.className)} />
  ),
  a: ({ ...props }) => {
    const isExternal = props.href.startsWith("http");
    const Component = isExternal ? "a" : NextLink;

    return (
      <Component
        href="#"
        prefetch={!isExternal ? true : undefined}
        target={isExternal ? "_blank" : undefined}
        {...props}
        className="text-default-700 hover:text-default-500 underline underline-offset-4"
      />
    );
  },
  Steps: ({ ...props }) => (
    <div className="[&>h3]:step border-default-200 relative ml-3.5 space-y-4 border-l pl-7 [counter-reset:step] [&>h3]:mt-8!" {...props} />
  ),
  Colors,
  ComponentPreview,
  ComponentCard,
  ApiTable,
};
