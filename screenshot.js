const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()
    await page.goto('http://applitools.com/')
    //  take screenshot code
    await page.screenshot({path: 'screenshot.png'}) //Only top part of the page
    const logo = await page.$('.logo')
   await logo.screenshot({path: 'elementscreenshot.png'})
    await page.screenshot({path: 'fullpage.png', fullPage: true}) //full page
    //Close the broswer
    await browser.close()
})();