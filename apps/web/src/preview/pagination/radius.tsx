import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationRadius() {
  const [page, setPage] = useState(5);
  
  return (
    <div className="space-y-4">
      <Pagination radius="none" total={10} page={page} onChange={setPage} />
      <Pagination radius="sm" total={10} page={page} onChange={setPage} />
      <Pagination radius="md" total={10} page={page} onChange={setPage} />
      <Pagination radius="lg" total={10} page={page} onChange={setPage} />
      <Pagination radius="full" total={10} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const radius = { code, scope: { useState } };
