import Accordion from "./components/Accordion";
import Button from "./components/Button";

const accordionItems = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is TypeScript?",
    content: "TypeScript is a superset of JavaScript that adds static typing.",
  },
  {
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework for rapid UI development.",
  },
];

export default function SectionCP() {
  return (
    <main>
      {/* Button Component */}
      <section className="text-center m-20 space-x-4">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="danger" size="lg">
          Danger Large
        </Button>
        <Button size="sm" className="uppercase">
          Small Uppercase
        </Button>
      </section>

      {/* Accordion */}
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          FAQ <small className="text-gray-500">(Accordion)</small>
        </h2>
        <Accordion items={accordionItems} allowMultipleOpen />
      </section>
    </main>
  );
}
