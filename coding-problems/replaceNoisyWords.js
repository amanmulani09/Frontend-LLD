// 2. Templatization - Replace Bad keywords with ***
// 		a. replaceKeywords('What the hell are you talking about, are you crazy', ['hell','crazy'])

// What the **** are you talking about, are you *****

const templatizationPhrase = (str, crazyWords) => {
  if (str.length < 1 || crazyWords.length < 1) return str;

  console.log(regexValidatation);
  let result = str
    .split(" ")
    .map((str) => (crazyWords.includes(str) ? "*".repeat(str.length) : str))
    .join(" ");

  return result;
};

console.log(
  templatizationPhrase("What the hell are you talking about, are you crazy", [
    "hell",
    "crazy",
  ])
);

// What the **** are you talking about, are you *****
