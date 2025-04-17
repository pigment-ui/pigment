const code = `
import { Button } from "pigment-ui";

function ButtonDemo() {
  return <Button onPress={() => alert("Clicked!")}>Click me</Button>;
}
`;

export const demo = { code };
