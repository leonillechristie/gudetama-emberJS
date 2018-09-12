import { helper } from '@ember/component/helper';

const itemPropertyTypes = [
  'Set',
  'Single'
];

export function productPropertyType([propertyType]) {
  if (itemPropertyTypes.includes(propertyType)) {
    return 'Community';
  }

  return 'Single Item';
}

export default helper(productPropertyType);
