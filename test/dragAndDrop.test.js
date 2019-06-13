internetPage = require('../pages/internet.page')

describe("Drag and Drop", function () {
    it.skip('should drag column A to column B', () => {
        browser.url(`${browser.options.baseUrl}/drag_and_drop`)
        internetPage.dragColumnAToColumnB()
        browser.pause(3000)
        assert.equal("A", internetPage.columnBHeader.getText())
    })
    it('Should drag and drop', () => {
        browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        internetPage.dragDraggableToDroppable()
        assert.equal('Dropped!', internetPage.droppableParagraph.getText())
    })
})