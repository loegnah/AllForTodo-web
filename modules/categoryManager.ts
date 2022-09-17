import _ from 'lodash';

const categoryColor = {
  default: '#cec0c0',
  categoryA: '#ca8585',
  categoryB: '#7dcddc',
} as const;

function getCategoryColor(category: keyof typeof categoryColor) {
  return _.get(categoryColor, category, categoryColor['default']);
}

export { getCategoryColor };
