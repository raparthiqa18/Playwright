const {firefox} = require('playwright');

(async () => {
    //function code
    const browser = await firefox.launch({headless: false, slowMo: 500})
    const page = await browser.newPage()
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')
    // Check the second checkbox
    const checkbox = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]')
    await checkbox[1].check();
    await checkbox[0].uncheck();
    // Select the second radio button
    const radiobtn = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=radio]')
    await radiobtn[1].check();
    await radiobtn[0].uncheck();
    await browser.close()

    
})();