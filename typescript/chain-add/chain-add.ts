export default function add(x: number): any {
  const fn = (y: number) => add(x + y);
  fn.valueOf = () => x;
  return fn;
}
