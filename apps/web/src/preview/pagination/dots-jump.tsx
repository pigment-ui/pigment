import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationDotsJump() {
  const [page, setPage] = useState(10);
  
  return (
    <div className="space-y-4">
      <Pagination dotsJump={3} total={20} page={page} onChange={setPage} />
      <Pagination dotsJump={5} total={20} page={page} onChange={setPage} />
      <Pagination dotsJump={10} total={20} page={page} onChange={setPage} />
    </div>
  );
}
`;

export const dotsJump = { code, scope: { useState } };
