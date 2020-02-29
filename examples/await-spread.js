const wait = (milliseconds = 0) => (
  new Promise(resolve => setTimeout(resolve, milliseconds))
)

async function contrivedExample (first, ...rest) {
  console.log(first)
  await wait(100)
  console.log([ ...rest, 6 ])
}

contrivedExample(1, 2, 3, 4,5)
