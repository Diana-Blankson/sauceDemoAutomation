const { test, expect } = require('@playwright/test');
const {demologinPage} = require('../poModels/demologin.page')
const {demoViewProduct} = require('../poModels/demoViewProduct.page')

test('view product', async({page}) =>{
    const demologin = new demologinPage(page)
    const demoView = new demoViewProduct(page)

    //visit url
    await demologin.url()

    //login
    await demologin.typeUsername()
    await demologin.typePassword()
    await demologin.clickLogin()

    //view product
    await demoView.viewProduct()
    await page.pause()

    //addCart
    await demoView.addCart()

})