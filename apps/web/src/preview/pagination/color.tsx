import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationColor() {
  const [page, setPage] = useState(5);
  
  return (
    <div className="space-y-4">
      <Pagination color="default" total={10} page={page} onChange={setPage} />
      <Pagination color="inverted" total={10} page={page} onChange={setPage} />
      <Pagination color="primary" total={10} page={page} onChange={setPage} />
      <Pagination color="secondary" total={10} page={page} onChange={setPage} />
      <Pagination color="info" total={10} page={page} onChange={setPage} />
      <Pagination color="success" total={10} page={page} onChange={setPage} />
      <Pagination color="warning" total={10} page={page} onChange={setPage} />
      <Pagination color="error" total={10} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const color = { code, scope: { useState } };
