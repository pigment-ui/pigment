import { twMerge } from "tailwind-merge";

export function Detail() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        className={twMerge(
          "absolute left-1/2 top-1/2 grid h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 scale-75 grid-cols-7 grid-rows-7 opacity-50 max-sm:scale-50",
          "after:absolute after:inset-[-50px] after:z-10 after:rounded-full after:shadow-[inset_0_0_100px_100px_white] dark:after:shadow-[inset_0_0_100px_100px_black]",
          "before:absolute before:inset-1/4 before:z-20 before:rounded-full before:bg-default-1000 before:blur-[200px]",
        )}
      >
        <div className={twMerge("col-start-3 row-start-3 border-[20px] border-default-1000 opacity-25", "border-b-0")} />
        <div className={twMerge("col-start-4 row-start-3 border-[20px] border-default-1000 opacity-25", "border-b-0 border-l-0 border-r-0")} />
        <div
          className={twMerge("col-start-5 row-start-3 border-[20px] border-default-1000 opacity-25", "border-b-0 border-l-0", "rounded-tr-full")}
        />
        <div className={twMerge("col-start-3 row-start-4 border-[20px] border-default-1000 opacity-25", "border-t-0")} />
        <div className={twMerge("col-start-4 row-start-4 border-[20px] border-default-1000 opacity-25", "border-l-0 border-r-0 border-t-0")} />
        <div
          className={twMerge("col-start-5 row-start-4 border-[20px] border-default-1000 opacity-25", "border-l-0 border-t-0", "rounded-br-full")}
        />
        <div className={twMerge("col-start-3 row-start-5 border-[20px] border-default-1000 opacity-25", "border-t-0", "rounded-bl-full")} />

        <div
          className={twMerge(
            "relative -z-10 col-span-2 col-start-4 row-span-2 row-start-3 rounded-full border border-dashed border-default-1000 opacity-50",
            "after:absolute after:inset-[18px] after:rounded-full after:border after:border-dashed after:border-default-1000",
          )}
        />
        <div
          className={twMerge(
            "relative -z-10 col-span-2 col-start-3 row-span-2 row-start-4 rounded-full border border-dashed border-default-1000 opacity-50",
            "after:absolute after:inset-[18px] after:rounded-full after:border after:border-dashed after:border-default-1000",
          )}
        />
        <div
          className={twMerge(
            "relative -z-10 col-start-3 row-span-7 row-start-1 border-x border-dashed border-default-1000 opacity-50",
            "after:absolute after:inset-[18px] after:border-x after:border-dashed after:border-default-1000",
          )}
        />
        <div
          className={twMerge(
            "relative -z-10 col-span-7 col-start-1 row-span-2 row-start-3 border-y border-dashed border-default-1000 opacity-50",
            "after:absolute after:inset-[18px] after:border-y after:border-dashed after:border-default-1000",
          )}
        />
      </div>
    </div>
  );
}
