const { expect,locator } = require('@playwright/test');
//just a test
exports.demoFilterItems = class demoFilterItems{
    constructor(page){
        this.page = page;

        this.filter = page.locator('.product_sort_container')
        this.firstItem = page.locator('.inventory_item_price >> nth=0')
        this.secondItem = page.locator('.inventory_item_price >> nth=1')
        this.lastItem = page.locator('.inventory_item_price >> nth=-1')
        this.firstImage = page.locator('.inventory_item_img >> nth=0')
    }

    async ZtoA(){
        await this.filter.selectOption('za')
        //await expect(this.firstImage).toHaveAttribute('src','/static/media/red-onesie-1200x1500.1b15e1fa.jpg')
    }

    async low(){
        await this.filter.selectOption({label: 'Price (low to high)'})
        await expect(this.lastItem).toHaveText('$49.99')
    }

    async high(){
        await this.filter.selectOption({label: 'Price (high to low)'})
        await expect(this.firstItem).toHaveText('$49.99')
        
    }
}