class GridPage {
    static get url() {
        return "https://demoqa.com/selectable";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get gridButton() {
        return cy.get("#demo-tab-grid");
    }

    static get wholeGrid() {
        return cy.get("#gridContainer");
    }
}

export default GridPage;