/* eslint-disable import/no-unresolved */

// Begin line with a parenthesis (
// https://github.com/checkly/puppeteer-examples/blob/master/1.%20basics/get_text_value.js
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com/news')
  const name = await page.$eval('.hnname > a', link => link.textContent)
  console.log(name)
  await browser.close()
})()


// begin line with a square bracket
const activeItems = document.querySelectorAll('.active')

;[...activeItems].forEach(item => {
  item.classList.remove('.active')
})


// begin line with a backtick `
const handleAttribute = console.log

;`id
className
someOtherAttrs`
  .split('\n')
  .forEach(attribute => {
    handleAttribute(attribute)
  })


