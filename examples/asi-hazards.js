/* eslint-disable no-unused-vars               -- examples are partials */
/* eslint-disable sonarjs/no-unused-collection -- examples are partials */
/* eslint-disable import/no-unresolved         -- puppeteer example     */
/* eslint-disable unicorn/string-content       -- array methods example */

// start line with a parenthesis (top-level await)
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  // Do more stuff with puppetter…
})()


// start line with square bracket (array methods)
const links = document.querySelectorAll('a')

;[...links]
  .filter(link => link.href.startsWith('http://'))
  .forEach(link => {
    link.classList.add('.warn')
  })


// start line with square bracket (array destructuring)
const getCoordinates = () => { /* do stuff here */ }

let x = 0
let y = 0

console.log(getCoordinates())
;[x, y] = getCoordinates()


// start line with a backtick (custom parsing)
const parseLine = () => { /* do stuff here */ }
const roles = []

;`14: Director, 20040301 - 20040403
129: Editor, 20171005 - 20171028
169: Relations, 20191223 - 20200121`
  .split('\n')
  .forEach(line => {
    roles.push(parseLine(line))
  })
