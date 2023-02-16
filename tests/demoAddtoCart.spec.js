const { test, expect } = require('@playwright/test');
const {demologinPage} = require('../poModels/demologin.page')
const {demoAddtoCartPage} = require('../poModels/demoAddtoCart.page')


//login
test ('add to cart', async ({page}) =>{

    const demologin = new demologinPage(page)
    const demoAddtoCart = new demoAddtoCartPage(page)
    
    //visit url
    await demologin.url()

    //login
    await demologin.typeUsername()
    await demologin.typePassword()
    await demologin.clickLogin()

    //add to cart
    await demoAddtoCart.addtoCart()

    await page.pause()
   
})

