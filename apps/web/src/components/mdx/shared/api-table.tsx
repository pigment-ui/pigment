"use client";

import preview from "#/preview";

export function ApiTable({ slug, api }: { slug: string; api: "props" | "events" }) {
  const name = slug.split("/")[0] || "";
  const section = slug.split("/")[1] || "";
  const tableData = preview?.[name]?.[section]?.[api] ?? [];

  return (
    <div className="w-full overflow-x-auto">
      <table className="border-default-200 min-w-full border-separate border-spacing-0 overflow-hidden rounded-md border text-left text-sm">
        <thead className="bg-default-100 text-default-700 font-semibold">
          <tr>
            <th className="border-default-200 border-b px-4 py-2">Prop</th>
            <th className="border-default-200 border-b px-4 py-2">Type</th>
            <th className="border-default-200 border-b px-4 py-2">Default</th>
          </tr>
        </thead>
        <tbody className="text-default-800">
          {tableData.map((item) => (
            <tr key={item.prop} className="bg-default-50">
              <td className="border-default-100 border-b px-4 py-2">
                <code className="bg-default-100 rounded px-1 py-0.5">{item.prop}</code>
              </td>
              <td className="border-default-100 border-b px-4 py-2">
                <code className="bg-default-100 rounded px-1 py-0.5">{item.type}</code>
              </td>
              <td className="border-default-100 border-b px-4 py-2">
                <code className="bg-default-100 rounded px-1 py-0.5">{item.defaultValue}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
