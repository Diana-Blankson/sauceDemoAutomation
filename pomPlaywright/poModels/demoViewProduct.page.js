const { expect,locator } = require('@playwright/test');

exports.demoViewProduct = class demoViewProduct{
    constructor(page){
        this.page = page;
        this.image = page.locator('[alt="Sauce Labs Bolt T-Shirt"]')
        this.description = page.locator('.inventory_details_desc large_size')
        this.price = page.locator('.inventory_details_price')
        this.addToCart = page.locator('button', {hasText: 'ADD TO CART'});
        this.remove = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')
        this.cartIcon = page.locator('.shopping_cart_badge')
    }

    async viewProduct(){
        
        await this.image.click()
       // await expect(this.description).toHaveValue('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
        await expect(this.price).toHaveText('$15.99')
    }

    async addCart(){

        await this.addToCart.click()
        //assert cart-badge would have a valur
        await expect(this.cartIcon).toHaveText('1')

        await this.remove.click()
        //assert cart-badge number wont be visible
        await expect(this.cartIcon).toBeHidden()
    }
} 
 