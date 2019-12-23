// parseMultiArguments accepts an array of arguments
// isSingleArray matches an array with a single nested array [['arg']]

const parseMultiArguments = args => {
  const isSingleArray = (args.length === 1 && Array.isArray(args[0]))
  return isSingleArray ? args[0] : args
}

export default parseMultiArguments
