const { expect,locator } = require('@playwright/test');

exports.demoAddtoCartPage = class demoAddtoCartPage{

    constructor(page){
        this.page = page;

        this.firstItem = page.locator('#add-to-cart-sauce-labs-backpack')
        this.secondItem = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.thirdItem = page.locator('#add-to-cart-sauce-labs-onesie')

        this.item1 = page.locator('#remove-sauce-labs-backpack')
        this.item2 = page.locator('#remove-sauce-labs-bolt-t-shirt')
        this.item3 = page.locator('#remove-sauce-labs-onesie')

        this.cartIcon = page.locator('.shopping_cart_badge')
    }

    async addtoCart(){
        await this.firstItem.click()
        await this.secondItem.click()
        await this.thirdItem.click()
        await expect(this.cartIcon).toHaveText('3')
    }

    async remove(){

        await this.item1.click()
        await this.item2.click()
        await this.item3.click()
    }
}
