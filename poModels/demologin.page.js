const { expect,locator } = require('@playwright/test');

exports.demologinPage = class demologinPage{

    constructor(page){
        this.page = page;
        this.data = { 
            "username":"standard_user",
            "password":"secret_sauce",
    }
        this.username = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginButton = page.locator('#login-button')
    }

    async url(){
        await this.page.goto('https://www.saucedemo.com/')
        await expect(this.page).toHaveTitle(/.*Swag Labs/)
        
    }
    async typeUsername(){
       
        await this.username.fill(this.data.username)
    }

    async typePassword(){
        await this.password.fill(this.data.password)
    }
    async clickLogin(){
        await this.loginButton.click()
        await expect(this.page).toHaveURL(/.*demo.com/)
    }
}