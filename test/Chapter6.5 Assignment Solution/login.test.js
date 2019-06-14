const login = require("../../pages/login.page")
const data = require('../../data/logindata')

describe("Login Page", function () {
    it("Should enter username", () => {
        browser.url(`${browser.options.baseUrl}/login`)
        login.enterUsername(data.validUserName)
        assert.equal(login.username.getValue(), data.validUserName)
    })
    it("Should enter password", () => {
        login.enterPassword(data.validPassword)
        assert.equal(login.password.getValue(), data.validPassword)
    })
    it("Should successfully log in user with correct name and password", () => {
        login.clickLoginButton()
        login.loginButton.waitForDisplayed(2000, true)
        assert.equal('You logged into a secure area!\n×', login.getFlashMessageText())
    })
    it("Should successfully log out", () => {
        login.clickLogoutButton()
        login.logoutButton.waitForDisplayed(2000, true)
        assert.equal('You logged out of the secure area!\n×', login.getFlashMessageText())
    })
    it("Should get correct message for missing username", () => {
        login.clickLoginButton()
        assert.equal('Your username is invalid!\n×', login.getFlashMessageText())
    })
    it("Should get correct message for incorrect password", () => {
        login.enterUsername(data.validUserName)
        login.enterPassword(data.password)
        login.clickLoginButton()
        assert.equal('Your password is invalid!\n×', login.getFlashMessageText())
    })
})