
import { useState } from 'react';

export default function useFancyHoverBorder() {
  const [isHovered, setHovered] = useState(false);

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  const className =
    'relative z-10 border border-teal-300 text-teal-300 px-4 py-2 rounded font-mono transition duration-300 ' +
    'before:absolute before:top-[4px] before:left-[4px] before:w-full before:h-full ' +
    'before:rounded before:border before:border-teal-300 before:transition-all ' +
    `${isHovered ? 'before:opacity-100' : 'before:opacity-0'} before:z-[-1]`;

  return { bind, className };
}
