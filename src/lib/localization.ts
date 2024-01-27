type ReplaceWith = string | string[];
export const replaceWildcard = (str: string, replaceWith: ReplaceWith) => {
  let newStr = str;

  if (replaceWith.constructor === Array) {
    for (let i = 0; i < replaceWith.length; i++) {
      newStr = newStr.replace('$' + (i + 1), replaceWith[i]);
    }
  } else if (replaceWith.constructor === String) {
    newStr = newStr.replace('$1', replaceWith);
  }

  return newStr;
};
