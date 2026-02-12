import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationVariantActive() {
  const [page, setPage] = useState(5);
  
  return (
    <div className="space-y-4">
      <Pagination variant="soft" variantActive="solid" total={10} page={page} onChange={setPage} />
      <Pagination variant="light" variantActive="soft" total={10} page={page} onChange={setPage} />
      <Pagination variant="bordered" variantActive="solid" total={10} page={page} onChange={setPage} />
      <Pagination variant="ghost" variantActive="solid" total={10} page={page} onChange={setPage} />
      <Pagination variant="faded" variantActive="solid" total={10} page={page} onChange={setPage} />
      <Pagination variant="soft" variantActive="gradient" total={10} page={page} onChange={setPage} />
      <Pagination variant="light" variantActive="animated" total={10} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const variantActive = { code, scope: { useState } };
