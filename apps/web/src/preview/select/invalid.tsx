const code = `
import { Select, SelectItem } from "pigment-ui";

function SelectInvalid() {
  return (
    <Select isInvalid errorMessage="This is an error message." label="Favorite Animal" description="Lorem ipsum dolor sit amet." className="w-64">
      <SelectItem>Aardvark</SelectItem>
      <SelectItem>Cat</SelectItem>
      <SelectItem>Dog</SelectItem>
      <SelectItem>Kangaroo</SelectItem>
      <SelectItem>Panda</SelectItem>
      <SelectItem>Snake</SelectItem>
    </Select>
  );
}
`;

export const invalid = { code };
