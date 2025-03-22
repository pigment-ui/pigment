"use client";

import { useAppSlots } from "#/app/providers";
import { CodeBlock } from "#/components/mdx/shared";
import { capitalize } from "inflection";
import { Button, Tab, TabList, Tabs, TextField } from "pigment-ui";
import { useEffect, useState } from "react";
import type { Key } from "react-aria";
import { twMerge } from "tailwind-merge";

export default function Page() {
  const { newVariant, newColor, extendedVariantsAndColors } = useAppSlots();

  const [selectedCode, setSelectedCode] = useState<Key>("provider");
  const [code, setCode] = useState(getCode(extendedVariantsAndColors, newVariant, newColor));

  useEffect(() => {
    setCode({ provider: getCode(extendedVariantsAndColors, newVariant, newColor), newVariantColor: newVariantColorCode, twCode }[selectedCode]);
  }, [selectedCode]);

  return (
    <main className="bg-[oklch(var(--tertiary))]">
      <div className="container space-y-4">
        <div className="grid grid-cols-4 max-md:grid-cols-2">
          <div className="border-default/20 bg-default-0 col-span-2 space-y-4 border p-16 max-sm:p-8">
            <h1 className="text-5xl font-bold max-lg:text-4xl">Playground</h1>
            <p className="text-default-700 max-lg:text-sm">
              This is a playground <b>for extending</b> your <b>variants/colors</b>. You can <b>add new variants/colors</b> and <b>see</b> how{" "}
              <b>all of it</b> looks <b>in the UI</b>. Additionally, you can <b>see the code</b> and <b>bring</b> it to your project.
            </p>
          </div>

          <div className="border-default/20 col-span-2 grid place-items-center border bg-gradient-to-br from-[oklch(0.585_0.233_277.117/0.1)] via-[oklch(0.585_0.233_277.117/0.5)] to-[oklch(0.585_0.233_277.117/0.1)] [background-size:200%_200%;] p-16 font-mono text-4xl font-bold text-[oklch(0.585_0.233_277.117)] duration-300 hover:[background-position:100%_100%;] max-lg:text-3xl max-sm:p-8">
            <div className="whitespace-pre-wrap">
              {`{ variant: "${newVariant}",
  color: "${newColor}" }`}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {(["default", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverted"] as const).map((color, index) => (
            <div
              key={color}
              className={twMerge(
                color === "inverted" ? "bg-default-1000" : "odd:bg-default-50",
                "border-default/20 grid aspect-[3/2] place-items-center border",
              )}
            >
              <Button color={color as any} variant={newVariant as any} size="lg">
                {capitalize(newVariant)} / {capitalize(color)}
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {(["default", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverted"] as const).map((color, index) => (
            <div
              key={color}
              className={twMerge(
                color === "inverted" ? "bg-default-1000" : "odd:bg-default-50",
                "border-default/20 grid aspect-[3/2] place-items-center border p-8",
              )}
            >
              <TextField
                label="New variant"
                isReadOnly
                color={color as any}
                className="w-full"
                size="lg"
                variant={newVariant as any}
                defaultValue={` ${capitalize(newVariant)} / ${capitalize(color)}`}
              />
            </div>
          ))}
        </div>

        <div className="relative">
          <CodeBlock code={code} language="tsx" className="max-h-[auto] rounded-none pt-14" />

          <Tabs selectedKey={selectedCode} onSelectionChange={setSelectedCode} size="sm" className="absolute top-4 left-4">
            <TabList aria-label="code tabs" className="font-mono">
              <Tab id="provider">{"<Providers />"}</Tab>
              <Tab id="twCode">{"tailwind.config.js"}</Tab>
              <Tab id="newVariantColor">{"Usage"}</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

const newVariantColorCode = `import { Button, TextField } from "pigment-ui";
import { twMerge } from "tailwind-merge";

function NewVariantColor() {
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2">
        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {(["default", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverted"]).map((color, index) => (
            <div
              key={color}
              className={twMerge(color === "inverted" ? "bg-default-1000" : "odd:bg-default-50", "border-default/20 grid aspect-[3/2] place-items-center border" )}
            >
              <Button color={color as any} variant={newVariant as any} size="lg">{capitalize("glass")} / {capitalize(color)}</Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {(["default", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverted"]).map((color, index) => (
            <div
              key={color}
              className={twMerge(color === "inverted" ? "bg-default-1000" : "odd:bg-default-50", "border-default/20 grid aspect-[3/2] place-items-center border p-8" )}
            >
              <TextField label="New variant" isReadOnly color={color as any} className="w-full" size="lg" variant={"glass" as any} defaultValue={\` \${capitalize("glass)} / \${capitalize(color)}\`}
              />
            </div>
          ))}
        </div>
    </div>
  );
}
`;

const getCode = (arr: any[], newVar: string, newColor: string) => {
  let asd;

  try {
    asd = JSON.stringify(
      arr.map((item: any) => ({ ...item, variant: newVar })),
      null,
      2,
    );
  } catch (error) {
    asd = JSON.stringify(arr, null, 2);
  }

  return `

"use client";

import { Provider } from "pigment-ui";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    // other providers
    <>
      <Provider
        extendVariantAndColorStyles={{
          variants: {
            variant: "${newVar}",
            color: "${newColor}"
          },
          compoundVariants: ${asd},
        }}
      >
        {/* other providers */}
        <>{children}</>
      </Provider>
    </>
  );
}
`;
};

const twCode = `// extend tertiary color

tertiary: {
  DEFAULT: "oklch(0.585 0.233 277.117 / <alpha-value>)",
  foreground: "oklch(var(--pigment-default-1000) / <alpha-value>)",
},`;
