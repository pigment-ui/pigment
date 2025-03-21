"use client";

import { useAppSlots } from "#/app/providers";
import { CodeBlock } from "#/components/mdx/shared";
import { capitalize } from "inflection";
import { Button, TextField } from "pigment-ui";
import { useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function Page() {
  const { newVariant, setNewVariant, extendedVariantsAndColors, setExtendedVariantsAndColors } = useAppSlots();

  const getCode = () =>
    useMemo(() => {
      let asd;

      try {
        asd = JSON.stringify(
          extendedVariantsAndColors.map((item: any) => ({ ...item, variant: newVariant })),
          null,
          2,
        );
      } catch (error) {
        asd = JSON.stringify(extendedVariantsAndColors, null, 2);
      }

      return `// providers.tsx

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
            variant: "${newVariant}",
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
    }, [newVariant, extendedVariantsAndColors]);

  useEffect(() => {
    setExtendedVariantsAndColors((prev: any) => {
      try {
        return prev.map((item: any) => ({ ...item, variant: newVariant }));
      } catch (error) {
        return prev;
      }
    });
  }, [newVariant]);

  return (
    <main>
      <div className="container">
        <div className="grid grid-cols-4 max-md:grid-cols-2">
          <div className="border-default/20 col-span-2 space-y-4 border p-16 max-sm:p-8">
            <h1 className="text-5xl font-bold max-lg:text-4xl">Playground</h1>
            <p className="text-default-700 max-lg:text-sm">
              This is a playground for extending your variants. You can add new variants and see how it looks together with the colors.
            </p>
          </div>

          <div className="border-default/20 col-span-2 flex flex-wrap place-content-center items-center justify-center gap-2 border p-16 font-mono text-4xl font-bold max-lg:text-3xl max-sm:p-8">
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
          {(["default", "inverted", "primary", "secondary", "info", "success", "warning", "error"] as const).map((color) => (
            <div
              key={color}
              className={twMerge(
                color === "inverted" && "bg-default",
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
          {(["default", "inverted", "primary", "secondary", "info", "success", "warning", "error"] as const).map((color) => (
            <div
              key={color}
              className={twMerge(
                color === "inverted" && "bg-default",
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

        <CodeBlock
          code={getCode()}
          setCode={(v) =>
            setExtendedVariantsAndColors((prev: any) => {
              try {
                return JSON.parse(v);
              } catch (error) {
                return prev;
              }
            })
          }
          language="tsx"
          className="max-h-[auto] rounded-none"
        />

        <CodeBlock code={glassCode} language="tsx" className="max-h-[auto] rounded-none" />
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
