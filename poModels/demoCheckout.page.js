const { expect,locator } = require('@playwright/test');

exports.demoCheckoutPage = class demoCheckoutPage{

    constructor(page){
        this.page = page;

        this.cartIcon = page.locator('#shopping_cart_container')
        this.checkoutButton = page.locator('#checkout')
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('[placeholder="Zip/Postal Code"]')
        this.continue = page.locator('[data-test="continue"]')
        this.shipInfo = page.locator('.summary_value_label >> nth=1')
        this.finish = page.locator('#finish')
        this.text = page.locator('.complete-header')
       
    }

    async checkout(){
        await this.cartIcon.click()
        await this.checkoutButton.click()
        await expect(this.page).toHaveURL(/.*checkout-step/)

    }

     //fill details form
    async typeFname(){
        await this.firstName.fill('Diana')
        await expect(this.firstName).toHaveValue('Diana')
    }

    async typeLname(){
        await this.lastName.fill('Blankson')
        await expect(this.lastName).toHaveValue('Blankson')

    }

    async typePcode(){
        await this.postalCode.fill('569')
        await expect(this.postalCode).toHaveValue('569')

     }

     async completeOrder(){
        await this.continue.click()
        await expect(this.page).toHaveURL(/.*checkout-step-two/)
        await expect(this.shipInfo).toHaveText('FREE PONY EXPRESS DELIVERY!')
        await this.finish.click()
        await expect(this.page).toHaveURL(/.*checkout-complete/)
        await expect(this.text).toHaveText('THANK YOU FOR YOUR ORDER')

     }

}
