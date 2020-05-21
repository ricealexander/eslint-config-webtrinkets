// Begin line with a parenthesis (

const composeTest = async () => (
  async () => 'Test Passed'
)

;(async () => {
  const test = await composeTest()
  const result = await test()
  console.log(result)
})()


// begin line with a backtick `

const handleAttribute = console.log

;`id
className
someOtherAttrs`
  .split('\n')
  .forEach(attribute => {
    handleAttribute(attribute)
  })


// begin line with a square bracket
;[1, 2, 3, 4].filter(number => number % 2)
