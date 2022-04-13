const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 50})
    const page = await browser.newPage()
    await page.goto('http://the-internet.herokuapp.com/forgot_password')
    // code to type in email textbox
    const email = page.$('#email')
    email.type('testemail.@mail.com', { delay : 50})
    
    //Close the broswer
    await browser.close()
})();