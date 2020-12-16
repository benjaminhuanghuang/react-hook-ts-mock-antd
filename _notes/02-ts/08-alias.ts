type PlusType = (x: number, y: number) => number;

function sum(x: number, y: number): number {
  return x + y;
}

const sum2: PlusType = sum;

type NameResolver = () => string;
type NameOrResolever = string | NameResolver;

function getName(n: NameOrResolever): string {
  if (typeof n === "string") {
    return n;
  }
  return n();
}
