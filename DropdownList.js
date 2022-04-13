const {chromium} = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({headless: false, slowMo: 500});
    const page = await browser.newPage();
    await page.goto('http://the-internet.herokuapp.com/dropdown');
    // code to select dropdown 
    const dropdown = await page.$('#dropdown');
    //value
    await dropdown.selectOption({value: '1'})
    //label
    await dropdown.selectOption({label: 'Option 2'})
    //index
    await dropdown.selectOption({index: 1})
    //Values inside the select
    const availableOptions = await dropdown.$$('option')
    for (let i =0; i<availableOptions.length; i++){
        console.log(await availableOptions[i].innerText())
    }
    
    
    await browser.close();
    
    
})();