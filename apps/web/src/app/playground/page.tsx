"use client";

import { useAppSlots } from "#/app/providers";
import { CodeBlock } from "#/components/mdx/shared";
import { capitalize } from "inflection";
import { Button, Tab, TabList, Tabs, TextField } from "pigment-ui";
import { useEffect, useState } from "react";
import type { Key } from "react-aria";
import { twMerge } from "tailwind-merge";

export default function Page() {
  const { newVariant, setNewVariant, extendedVariantsAndColors, setExtendedVariantsAndColors } = useAppSlots();

  useEffect(() => {
    setExtendedVariantsAndColors((prev: any) => {
      try {
        return prev.map((item: any) => ({ ...item, variant: newVariant }));
      } catch (error) {
        return prev;
      }
    });
  }, [newVariant]);

  const [selectedCode, setSelectedCode] = useState<Key>("provider");
  const [code, setCode] = useState(getCode(extendedVariantsAndColors, newVariant));

  useEffect(() => {
    setCode(selectedCode === "provider" ? getCode(extendedVariantsAndColors, newVariant) : glassCode);
  }, [selectedCode]);

  return (
    <main>
      <div className="container space-y-4">
        <div className="grid grid-cols-4 max-md:grid-cols-2">
          <div className="border-default/20 bg-default-0 col-span-2 space-y-4 border p-16 max-sm:p-8">
            <h1 className="text-5xl font-bold max-lg:text-4xl">Playground</h1>
            <p className="text-default-700 max-lg:text-sm">
              This is a playground for extending your variants. You can add new variants and see how it looks together with the colors.
            </p>
          </div>

          <div className="border-default/20 bg-default-50 col-span-2 flex flex-wrap place-content-center items-center justify-center gap-2 border p-16 font-mono text-4xl font-bold max-lg:text-3xl max-sm:p-8">
            <span className="whitespace-nowrap">
              {"{ "}
              variant:
            </span>
            <span className="whitespace-nowrap">
              <span className="before:from-default/10 before:to-default/50 relative z-0 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br">{`"${newVariant}"`}</span>
              {" }"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {(["default", "inverted", "primary", "secondary", "info", "success", "warning", "error"] as const).map((color, index) => (
            <div
              key={color}
              className={twMerge(
                color === "inverted" ? "bg-default-1000" : [1, 3, 4, 6].includes(index) ? "bg-default-50" : "bg-default-0",
                "border-default/20 grid aspect-square place-items-center border max-lg:aspect-[3/2]",
              )}
            >
              <Button color={color} variant={newVariant as any} size="lg">
                {capitalize(newVariant)} / {capitalize(color)}
              </Button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {(["default", "inverted", "primary", "secondary", "info", "success", "warning", "error"] as const).map((color, index) => (
            <div
              key={color}
              className={twMerge(
                color === "inverted" ? "bg-default-1000" : [1, 3, 4, 6].includes(index) ? "bg-default-50" : "bg-default-0",
                "border-default/20 grid aspect-square place-items-center border p-8 max-lg:aspect-[3/2]",
              )}
            >
              <TextField
                label="New variant"
                isReadOnly
                color={color}
                className="w-full"
                size="lg"
                variant={newVariant as any}
                defaultValue={` ${capitalize(newVariant)} / ${capitalize(color)}`}
              />
            </div>
          ))}
        </div>

        <div className="relative">
          <CodeBlock
            code={code}
            // setCode={(v) =>
            //   setExtendedVariantsAndColors((prev: any) => {
            //     try {
            //       return JSON.parse(v);
            //     } catch (error) {
            //       return prev;
            //     }
            //   })
            // }
            language="tsx"
            className="max-h-[auto] rounded-none pt-14"
          />

          <Tabs
            selectedKey={selectedCode}
            onSelectionChange={setSelectedCode}
            variant={newVariant as any}
            size="sm"
            className="absolute top-4 left-4"
          >
            <TabList aria-label="code tabs" className="font-mono">
              <Tab id="provider">{"<Providers />"}</Tab>
              <Tab id="glass">{"<GlassVariant />"}</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </main>
  );
}

const glassCode = `import { Button, TextField } from "pigment-ui";
import { twMerge } from "tailwind-merge";

function GlassVariant() {
  return (
    <div className="grid grid-cols-4 max-md:grid-cols-2">
      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {(["default", "inverted", "primary", "secondary", "info", "success", "warning", "error"] as const).map((color) => (
          <div
            key={color}
            className={twMerge(
              color === "inverted" && "bg-default",
              "border-default/20 grid aspect-square place-items-center border max-lg:aspect-[3/2]",
            )}
          >
            <Button variant="glass" color={color} size="lg">
              Click Me
            </Button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {(["default", "inverted", "primary", "secondary", "info", "success", "warning", "error"] as const).map((color) => (
          <div
            key={color}
            className={twMerge(
              color === "inverted" && "bg-default",
              "border-default/20 grid aspect-square place-items-center border p-8 max-lg:aspect-[3/2]",
            )}
          >
            <TextField label="Lorem ipsum" variant="glass" color={color} size="lg" className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
`;

const getCode = (arr: any[], newVar: string) => {
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
