class Login {
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('#login button') }
    get flashMessage() { return $('#flash-messages #flash') }
    get logoutButton() { return $('.example .button') }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
    enterUsername(text) {
        this.username.waitForDisplayed()
        this.username.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String} text password to be entered
     */
    enterPassword(text) {
        this.password.waitForDisplayed()
        this.password.setValue(text)
    }

    /**
     * Click login button
     */
    clickLoginButton() {
        this.loginButton.waitForDisplayed()
        this.loginButton.click()
    }

    /**
     * Get the text from the flash message
     */
    getFlashMessageText() {
        this.flashMessage.waitForDisplayed()
        return this.flashMessage.getText()
    }

    /**
     * Click logout button
     */
    clickLogoutButton() {
        this.logoutButton.waitForDisplayed()
        this.logoutButton.click()
    }

}
module.exports = new Login()