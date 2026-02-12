import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationSiblingCount() {
  const [page, setPage] = useState(10);
  
  return (
    <div className="space-y-4">
      <Pagination siblingCount={0} total={20} page={page} onChange={setPage} />
      <Pagination siblingCount={1} total={20} page={page} onChange={setPage} />
      <Pagination siblingCount={2} total={20} page={page} onChange={setPage} />
      <Pagination siblingCount={3} total={20} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const siblingCount = { code, scope: { useState } };
