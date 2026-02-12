import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationVariant() {
  const [page, setPage] = useState(1);
  
  return (
    <div className="space-y-4">
      <Pagination variant="solid" total={10} page={page} onChange={setPage} />
      <Pagination variant="soft" total={10} page={page} onChange={setPage} />
      <Pagination variant="light" total={10} page={page} onChange={setPage} />
      <Pagination variant="bordered" total={10} page={page} onChange={setPage} />
      <Pagination variant="ghost" total={10} page={page} onChange={setPage} />
      <Pagination variant="faded" total={10} page={page} onChange={setPage} />
      <Pagination variant="card" total={10} page={page} onChange={setPage} />
      <Pagination variant="gradient" total={10} page={page} onChange={setPage} />
      <Pagination variant="animated" total={10} page={page} onChange={setPage} />
      <Pagination variant="shadow" total={10} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const variant = { code, scope: { useState } };
