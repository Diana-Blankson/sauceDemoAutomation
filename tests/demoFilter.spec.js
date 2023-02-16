const { test, expect } = require('@playwright/test');
const {demologinPage} = require('../poModels/demologin.page')
const {demoFilterItems} = require('../poModels/demoFilter.page')

test ('filter', async ({page}) =>{

    const demologin = new demologinPage(page)
    const demoFilter = new demoFilterItems(page)

     //visit url
     await demologin.url()

     //login
     await demologin.typeUsername()
     await demologin.typePassword()
     await demologin.clickLogin()

     //select to filter
     await demoFilter.ZtoA()
     await demoFilter.low()
     await demoFilter.high()
     
     await page.pause()
})
