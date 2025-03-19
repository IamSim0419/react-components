import Button from "./components/Button";

export default function SectionCP() {
  return (
    <main className="text-center m-20 space-x-4">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="danger" size="lg">
        Danger Large
      </Button>
      <Button size="sm" className="uppercase">
        Small Uppercase
      </Button>
    </main>
  );
}
