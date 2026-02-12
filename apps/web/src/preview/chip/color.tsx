const code = `
import { Chip } from "pigment-ui";

function ChipColor() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <Chip color="default" variant="solid">Default</Chip>
        <Chip color="default" variant="soft">Default</Chip>
        <Chip color="default" variant="light">Default</Chip>
        <Chip color="default" variant="bordered">Default</Chip>
        <Chip color="default" variant="ghost">Default</Chip>
        <Chip color="default" variant="faded">Default</Chip>
        <Chip color="default" variant="card">Default</Chip>
        <Chip color="default" variant="gradient">Default</Chip>
        <Chip color="default" variant="animated">Default</Chip>
        <Chip color="default" variant="shadow">Default</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="inverted" variant="solid">Inverted</Chip>
        <Chip color="inverted" variant="soft">Inverted</Chip>
        <Chip color="inverted" variant="light">Inverted</Chip>
        <Chip color="inverted" variant="bordered">Inverted</Chip>
        <Chip color="inverted" variant="ghost">Inverted</Chip>
        <Chip color="inverted" variant="faded">Inverted</Chip>
        <Chip color="inverted" variant="card">Inverted</Chip>
        <Chip color="inverted" variant="gradient">Inverted</Chip>
        <Chip color="inverted" variant="animated">Inverted</Chip>
        <Chip color="inverted" variant="shadow">Inverted</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="primary" variant="solid">Primary</Chip>
        <Chip color="primary" variant="soft">Primary</Chip>
        <Chip color="primary" variant="light">Primary</Chip>
        <Chip color="primary" variant="bordered">Primary</Chip>
        <Chip color="primary" variant="ghost">Primary</Chip>
        <Chip color="primary" variant="faded">Primary</Chip>
        <Chip color="primary" variant="card">Primary</Chip>
        <Chip color="primary" variant="gradient">Primary</Chip>
        <Chip color="primary" variant="animated">Primary</Chip>
        <Chip color="primary" variant="shadow">Primary</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="secondary" variant="solid">Secondary</Chip>
        <Chip color="secondary" variant="soft">Secondary</Chip>
        <Chip color="secondary" variant="light">Secondary</Chip>
        <Chip color="secondary" variant="bordered">Secondary</Chip>
        <Chip color="secondary" variant="ghost">Secondary</Chip>
        <Chip color="secondary" variant="faded">Secondary</Chip>
        <Chip color="secondary" variant="card">Secondary</Chip>
        <Chip color="secondary" variant="gradient">Secondary</Chip>
        <Chip color="secondary" variant="animated">Secondary</Chip>
        <Chip color="secondary" variant="shadow">Secondary</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="info" variant="solid">Info</Chip>
        <Chip color="info" variant="soft">Info</Chip>
        <Chip color="info" variant="light">Info</Chip>
        <Chip color="info" variant="bordered">Info</Chip>
        <Chip color="info" variant="ghost">Info</Chip>
        <Chip color="info" variant="faded">Info</Chip>
        <Chip color="info" variant="card">Info</Chip>
        <Chip color="info" variant="gradient">Info</Chip>
        <Chip color="info" variant="animated">Info</Chip>
        <Chip color="info" variant="shadow">Info</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="success" variant="solid">Success</Chip>
        <Chip color="success" variant="soft">Success</Chip>
        <Chip color="success" variant="light">Success</Chip>
        <Chip color="success" variant="bordered">Success</Chip>
        <Chip color="success" variant="ghost">Success</Chip>
        <Chip color="success" variant="faded">Success</Chip>
        <Chip color="success" variant="card">Success</Chip>
        <Chip color="success" variant="gradient">Success</Chip>
        <Chip color="success" variant="animated">Success</Chip>
        <Chip color="success" variant="shadow">Success</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="warning" variant="solid">Warning</Chip>
        <Chip color="warning" variant="soft">Warning</Chip>
        <Chip color="warning" variant="light">Warning</Chip>
        <Chip color="warning" variant="bordered">Warning</Chip>
        <Chip color="warning" variant="ghost">Warning</Chip>
        <Chip color="warning" variant="faded">Warning</Chip>
        <Chip color="warning" variant="card">Warning</Chip>
        <Chip color="warning" variant="gradient">Warning</Chip>
        <Chip color="warning" variant="animated">Warning</Chip>
        <Chip color="warning" variant="shadow">Warning</Chip>
      </div>

      <div className="flex flex-wrap gap-4">
        <Chip color="error" variant="solid">Error</Chip>
        <Chip color="error" variant="soft">Error</Chip>
        <Chip color="error" variant="light">Error</Chip>
        <Chip color="error" variant="bordered">Error</Chip>
        <Chip color="error" variant="ghost">Error</Chip>
        <Chip color="error" variant="faded">Error</Chip>
        <Chip color="error" variant="card">Error</Chip>
        <Chip color="error" variant="gradient">Error</Chip>
        <Chip color="error" variant="animated">Error</Chip>
        <Chip color="error" variant="shadow">Error</Chip>
      </div>
    </div>
  );
}
`;

export const color = { code };
