internetPage = require('../pages/internet.page')

describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', () => {
        browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({ timeout: 4000})
        assert.equal(true, internetPage.inputEnabledField.isEnabled())
        wdioExpect(internetPage.inputEnabledField).toBeEnabled()
        wdioExpect(internetPage.inputEnabledField).not.toBeDisabled()
        wdioExpect(internetPage.enableButton).toHaveAttributeContaining ('autocomplete', 'off')
        //browser.debug() Uncomment to test how the debug functionality works
    })
    it('should wait for the input field to be disabled', () => {
        internetPage.clickEnableButton()
        internetPage.inputEnabledField.waitForEnabled({timeout:4000, reverse:true})
        assert.equal(false, internetPage.inputEnabledField.isEnabled())
    })
})