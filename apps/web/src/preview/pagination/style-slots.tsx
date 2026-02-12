import { useState } from "react";

const code = `
import { Pagination } from "pigment-ui";
import { useState } from "react";

function PaginationStyleSlots() {
  const [page, setPage] = useState(5);
  
  return (
    <Pagination
      total={10}
      page={page}
      onChange={setPage}
      classNames={{
        wrapper: "bg-default-100 p-2 rounded-lg",
        base: "hover:bg-primary-100 transition-colors",
      }}
    />
  );
}
`;

export const styleSlots = { code, scope: { useState } };
