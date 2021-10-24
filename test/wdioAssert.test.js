const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.loginSync('tomsmith', 'SuperSecretPassword!');
        wdioExpect(SecurePage.flashAlert).toBeExisting();
        wdioExpect(SecurePage.flashAlert).toHaveText(
            'SECURE',{ignoreCase:true,containing:true});


        wdioExpect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
        wdioExpect(browser).toHaveUrlContaining('secure')
        wdioExpect(browser).toHaveTitle('The Internet')
    });

    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.loginSync('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        assert.equal(SecurePage.flashAlert.isExisting(),true)
        SecurePage.flashAlert.isExisting().should.equal(true)


        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');

        assert.include(SecurePage.flashAlert.getText(),
            'You logged into a secure area!');

        SecurePage.flashAlert.getText().should.include('You logged into a secure area!')

        // expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure')
        assert.equal('https://the-internet.herokuapp.com/secure',browser.getUrl())
    });
});


