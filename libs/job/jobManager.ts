type Job = {
  title: string;
  comment: string;
  category: string;
};

const categoryColor = {
  categoryA: '#b24c4c',
  categoryB: '#49bcd1',
};

const getCategoryColor = (category: keyof typeof categoryColor) => categoryColor[category];

export { getCategoryColor };
export type { Job };
