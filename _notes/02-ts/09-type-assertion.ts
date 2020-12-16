
function getLength(input:string|number):number {
  const str = input as String;
  return str.length;

  if((<string>input).length)
    return (<string>input).length
}