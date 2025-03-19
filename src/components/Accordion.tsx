import React, { useState, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

interface AccordionProps {
  items: { title: string; content: ReactNode }[];
  allowMultipleOpen?: boolean;
  className?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen,
  onClick,
  className,
}) => {
  return (
    <div className={twMerge("border-b border-gray-200", className)}>
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition"
      >
        <span className="text-lg font-medium">{title}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ⭯
        </span>
      </button>
      <div
        className={`px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "py-8 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

//! Accordion Component
const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={twMerge(
        "w-full max-w-md mx-auto border border-gray-300 rounded-md",
        className
      )}
    >
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          isOpen={openIndex === idx}
          onClick={() => toggleIndex(idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;

// const Example = () => {
//   const accordionItems = [
//     {
//       title: 'What is React?',
//       content: 'React is a JavaScript library for building user interfaces.',
//     },
//     {
//       title: 'What is TypeScript?',
//       content: 'TypeScript is a superset of JavaScript that adds static typing.',
//     },
//     {
//       title: 'What is Tailwind CSS?',
//       content: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
//     },
//   ];

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">FAQ</h2>
//       <Accordion items={accordionItems} allowMultipleOpen />
//     </div>
//   );
// };

// export default Example;
