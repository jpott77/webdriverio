const internetPage = require("../pages/internet.page")

describe("Interacting with elements", function () {
    it("Get text for element", () => {
        browser.url('/')
        let text = $("//*[@id='page-footer']").getText()
        console.log(text)
        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    })
    it("Is footer Displayed", () => {
        console.log(internetPage.pageFooter.isDisplayed())
    })
    it("Does the header exist?", () => {
        console.log(internetPage.pageHeader.isExisting())
    })
    it("Is footer in viewport?", () => {
        console.log(internetPage.pageFooter.isDisplayedInViewport())
    })
    it("Is Header in viewport", () => {
        console.log(internetPage.pageHeader.isDisplayedInViewport())
    })
    it("Is subheader enabled?", () => {
        console.log(internetPage.subHeading.isEnabled())
    })

    it("Click Element", () => {
        internetPage.clickOnLink()
    })
})