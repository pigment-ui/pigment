const code = `
import { Button } from "pigment-ui";

function ButtonColor() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Button color="default" variant="solid">
          Default
        </Button>
        <Button color="default" variant="soft">
          Default
        </Button>
        <Button color="default" variant="light">
          Default
        </Button>
        <Button color="default" variant="bordered">
          Default
        </Button>
        <Button color="default" variant="faded">
          Default
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="primary" variant="solid">
          Primary
        </Button>
        <Button color="primary" variant="soft">
          Primary
        </Button>
        <Button color="primary" variant="light">
          Primary
        </Button>
        <Button color="primary" variant="bordered">
          Primary
        </Button>
        <Button color="primary" variant="faded">
          Primary
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="info" variant="solid">
          Info
        </Button>
        <Button color="info" variant="soft">
          Info
        </Button>
        <Button color="info" variant="light">
          Info
        </Button>
        <Button color="info" variant="bordered">
          Info
        </Button>
        <Button color="info" variant="faded">
          Info
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="success" variant="solid">
          Success
        </Button>
        <Button color="success" variant="soft">
          Success
        </Button>
        <Button color="success" variant="light">
          Success
        </Button>
        <Button color="success" variant="bordered">
          Success
        </Button>
        <Button color="success" variant="faded">
          Success
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="warning" variant="solid">
          Warning
        </Button>
        <Button color="warning" variant="soft">
          Warning
        </Button>
        <Button color="warning" variant="light">
          Warning
        </Button>
        <Button color="warning" variant="bordered">
          Warning
        </Button>
        <Button color="warning" variant="faded">
          Warning
        </Button>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button color="error" variant="solid">
          Error
        </Button>
        <Button color="error" variant="soft">
          Error
        </Button>
        <Button color="error" variant="light">
          Error
        </Button>
        <Button color="error" variant="bordered">
          Error
        </Button>
        <Button color="error" variant="faded">
          Error
        </Button>
      </div>
    </div>
  );
}
`;

export const color = { code };
