const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()
    await page.goto('https://demoqa.com/frames')
    // logic to handle iframes
    const frame1 = await page.frame({url: /\/sample/});
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText())
    
    //Close the broswer
    await browser.close()
})();