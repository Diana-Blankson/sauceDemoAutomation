const { test, expect } = require('@playwright/test');
const {demologinPage} = require('../poModels/demologin.page')



test ('login', async ({page}) =>{
    const demologin = new demologinPage(page)
    
    //visit url
    await demologin.url()

    //login
    await demologin.typeUsername()
    await demologin.typePassword()
    await demologin.clickLogin()
    
    await page.pause()
})