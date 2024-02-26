export function getNumberOfChars(name: string): number {
return name.length;
  // number of characters in: name
}

export function getFirstChar(name: string): string {
  return name.charAt(0);
  // first character of: name
}

export function getLastChar(name: string): string {
  return name.charAt(name.length - 1);
  // last character of: name

}

export function getLower(name: string): string {
  return name.toLowerCase();
  // name all in lower case (example: "ABC" becomes "abc")
}

export function getUpper(name: string): string {
  return name.toUpperCase();
  // name all in upper case (example: "abc" becomes "ABC")
}