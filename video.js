const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 50})

    //Creating a page inside context
    const context = await browser.newContext({
        recordVideo: {
            dir: "./recordings"
        }
    })
    const page = await context.newPage()

    //navigating to site and perform operations
    await page.goto('http://the-internet.herokuapp.com/dynamic_loading/1')
    await page.click('button')
    await page.waitForSelector('#loading')
    await page.waitForSelector('#loading', {state: 'hidden'})
    await page.waitForTimeout(100)
    
    //Close the broswer
    await browser.close()//must close if not video does not get saved
})();