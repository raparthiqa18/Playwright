const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 300});
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    // code to Click  
    for(j=1; j<6; j++){
        for(i=1; i<25; i++){
            await page.click('#t1 > table > tr:nth-child(' + j + ') > td:nth-child(' + i + ') > button');
        }
    }
    await browser.close();

    
})();