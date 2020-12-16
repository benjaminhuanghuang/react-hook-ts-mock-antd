function echo<T>(arg: T): T {
  return arg;
}

const result = echo(123);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const res = swap(["string", 123]);

function echoArr<T>(arg: T[]): T[] {
  console.log(arg.length); // need T.length
  return arg;
}
/*-------------------------------------
// 约束 extends
--------------------------------------*/
interface ILength {
  length: number;
}

function echoLength<T extends ILength>(arg: T): T {
  console.log(arg.length); // need T.length
  return arg;
}

const str = echoLength("str");
const obj = echoLength({ length: 10 });
const arr = echoLength([1, 2, 3]);


/*-------------------------------------
// Type of function
--------------------------------------*/
interface IPlus<T> {
  (a: T, b: T): T;
}

const a: IPlus<string> = (a: string, b: string) => {
  return a + b;
};
