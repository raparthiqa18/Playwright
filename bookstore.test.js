const { chromium } = require('playwright')

describe('UI tests for bookstore using playwright', async() => {
    jest.setTimeout(1000)
    let broswer = null
    let page = null
    let context = null
    let firstRowCells = true

    beforeAll(async() => {        
        browser = await chromium.launch({headless: false, slowMo: 50})
        context = await broswer.newContext()
        page = await context.newPage()
        await page.goto('http://demoqa.com/books')
    })

    afterAll(async() => {
        await browser.close()
    })

    test('Should load page', async() => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull()
    })
    test('Should be able to search for elquent javascript', async() => {
        await page.fill('#searchbox', 'eloquent')
    })

    test('Should check if book image is okay', async() => {
        firstRowCells = await page.$$('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.books-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(1)')
        let imgUrl = await firstRowCells[0].$('img')
    })

    test('Should check if ttitle is okay', async() => {
        
    })
})