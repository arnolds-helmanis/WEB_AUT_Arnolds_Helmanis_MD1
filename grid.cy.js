import GridPage from "./pageObjects/grid.page";

describe("Selectable grid scenario", () => {
    beforeEach(() => {
        GridPage.visit();
        GridPage.gridButton.click();
    });

    it("Selected/unselected grid", () => {
        // pre-validation
        GridPage.wholeGrid.contains("Two").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Four").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Six").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Eight").should('not.have.class', 'active');
        // actions
        GridPage.wholeGrid.contains("Two").click();
        GridPage.wholeGrid.contains("Four").click();
        GridPage.wholeGrid.contains("Six").click();
        GridPage.wholeGrid.contains("Eight").click();
        // validation
        GridPage.wholeGrid.contains("Two").should('have.class', 'active');
        GridPage.wholeGrid.contains("Four").should('have.class', 'active');
        GridPage.wholeGrid.contains("Six").should('have.class', 'active');
        GridPage.wholeGrid.contains("Eight").should('have.class', 'active');

        GridPage.wholeGrid.contains("One").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Three").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Five").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Seven").should('not.have.class', 'active');
        GridPage.wholeGrid.contains("Nine").should('not.have.class', 'active');
    });
});