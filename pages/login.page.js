const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get flashMessage() { return $('#flash-messages #flash') }
    get logoutButton() { return $('.example .button') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    loginSync (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
     enterUsername(text) {
        this.inputUsername.waitForDisplayed()
        this.inputUsername.setValue(text)
    }

    /**
     * Enter the password into the field
     * @param {String} text password to be entered
     */
     enterPassword(text) {
        this.inputPassword.waitForDisplayed()
        this.inputPassword.setValue(text)
    }

    /**
     * Click login button
     */
     clickLoginButton() {
        this.btnSubmit.waitForDisplayed()
        this.btnSubmit.click()
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

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
