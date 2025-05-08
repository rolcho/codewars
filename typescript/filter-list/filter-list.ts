export function filter_list(l: Array<any>): Array<number> {
  // Return a new array with the strings filtered out
  return l.filter((i) => typeof i !== 'string');
}
