export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      // Add the part of the value after startString to the result array
      result.push(value.slice(startString.length));
    }
  });

  return result.join('-');
}
