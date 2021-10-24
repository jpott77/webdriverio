const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await wdioExpect(SecurePage.flashAlert).toBeExisting();
        await wdioExpect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.loginSync('tomsmith', 'SuperSecretPassword!');
        wdioExpect(SecurePage.flashAlert).toBeExisting();
        wdioExpect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});


