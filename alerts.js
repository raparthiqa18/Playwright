const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 5000})
    const page = await browser.newPage()
    await page.goto('https://demoqa.com/alerts')
    // Handling alerts
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept();
    })
    await page.click('#confirmButton');
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept("my message");
    })
    
    await page.click('#promtButton')
    
    //Close the broswer
    await browser.close()
})();