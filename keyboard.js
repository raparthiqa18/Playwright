const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/key_presses')
    // code to keyboard press
    
    // const keyPress = await page.$('#target')
    await page.click('input')
    await page.keyboard.type('Rakesh has entered text')
    await page.keyboard.down('Shift')
    for(let i = 0; i < ' entered text'.length; i++){
        await page.keyboard.press('ArrowLeft')
    }
    await page.keyboard.up('Shift')
    await page.keyboard.press('Backspace')
    await page.keyboard.type(' new word')
    //Close the broswer
    await browser.close()
})();