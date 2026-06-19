export type Principle = {
  title: string;
  description: string;
  quote?: { text: string; author: string };
};

export const principles: Principle[] = [
  {
    title: 'Ask Why',
    description:
      'Before jumping into solutions, I always ask why. Defining and truly understanding the problem is the most important step I can take in engineering, in leadership, and in life. Clarity on the problem saves more time than speed on the solution.',
    quote: {
      text: 'A problem well-stated is a problem half-solved.',
      author: 'Charles Kettering',
    },
  },
  {
    title: 'Maximum Impact, Minimum Waste',
    description:
      'I apply the Pareto principle wherever I can: achieve 80% of the value with 20% of the effort. I gravitate toward work that delivers outsized results with minimal overhead. Ship something small, validate it, then iterate. Not every problem needs a perfect solution.',
    quote: {
      text: 'For many outcomes, roughly 80% of consequences come from 20% of causes.',
      author: 'Vilfredo Pareto',
    },
  },
  {
    title: 'Fail Fast, Improve Always',
    description:
      "I'd rather try something quickly and learn from failure than spend weeks perfecting a plan. Try, fail, adapt, improve. The iteration loop is where real progress lives. I believe in falling in love with the process of becoming better. Continuous feedback loops drive everything I do.",
    quote: {
      text: 'The only real mistake is the one from which we learn nothing.',
      author: 'Henry Ford',
    },
  },
];
