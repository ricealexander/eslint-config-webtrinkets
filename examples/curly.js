const letters = new Set(
  [...'abcdefghijklmnopqrstuvwxyz']
)

if (letters.has('j')) {
  console.info('J is for Jaguar')
}

if (letters.has('j')) console.info('J is for Jaguar')

