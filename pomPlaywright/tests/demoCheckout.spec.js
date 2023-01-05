const { test, expect } = require('@playwright/test');
const {demologinPage} = require('../poModels/demologin.page')
const {demoAddtoCartPage} = require('../poModels/demoAddtoCart.page')
const {demoCheckoutPage} = require('../poModels/demoCheckout.page')


//login
test ('add to cart', async ({page}) =>{

    const demologin = new demologinPage(page)
    const demoAddtoCart = new demoAddtoCartPage(page)
    const demoCheckout = new demoCheckoutPage(page)

    //visit url
    await demologin.url()

    //login
    await demologin.typeUsername()
    await demologin.typePassword()
    await demologin.clickLogin()
    
    //add to cart
    await demoAddtoCart.addtoCart()

    // checkout
    await demoCheckout.checkout()

    // fill form
    await demoCheckout.typeFname()
    await demoCheckout.typeLname()
    await demoCheckout.typePcode()

    //complete order
    await demoCheckout.completeOrder()

    await page.pause()
   
})