const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()
    await page.goto('https://demoqa.com/automation-practice-form')
    // code to type in email textbox
   const firstName = await page.$('#firstName')
   const sportscheck = await page.$('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label')
   const submitBtn = await page.$('#submit')

   console.log(await firstName.isDisabled())
   console.log(await firstName.isEnabled())
   console.log(await firstName.isEditable())

   console.log(await sportscheck.isChecked())
   console.log(await sportscheck.isVisible())

   console.log(await submitBtn.isHidden())
   console.log(await submitBtn.isVisible()) 
   
    //Close the broswer
    await browser.close()
})();