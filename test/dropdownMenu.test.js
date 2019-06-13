internetPage = require('../pages/internet.page')

describe('Dropdown menu', function () {
    it('should select option 1', () => {
        browser.url(`${browser.options.baseUrl}/dropdown`)
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOption1()
        assert.equal(true, internetPage.dropdownMenuOption1.isSelected())
    })
    it('should select option 2', () => {
        internetPage.clickDropdownMenu()
        internetPage.clickDropdownMenuOption2()
        assert.equal(true, internetPage.dropdownMenuOption2.isSelected())
    })
})