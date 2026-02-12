import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationSize() {
  const [page, setPage] = useState(5);
  
  return (
    <div className="space-y-4">
      <Pagination size="sm" total={10} page={page} onChange={setPage} />
      <Pagination size="md" total={10} page={page} onChange={setPage} />
      <Pagination size="lg" total={10} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const size = { code, scope: { useState } };
