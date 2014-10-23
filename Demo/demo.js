$(document).ready(function () {

    function getCarData() {
        return [
            {
                car: "Mercedes A 160",
                year: 2006,
                price: 6999.99,
                percentage: 0.02
            },
            {
                car: "Citroen C4 Coupe",
                year: 2008,
                price: 8330,
                percentage: 0.01
            },
            {
                car: "Audi A4 Avant",
                year: 2011,
                price: 33900,
                percentage: 0.03
            },
            {
                car: "Opel Astra",
                year: 2004,
                price: 7000,
                percentage: 0.02
            },
            {
                car: "BMW 320i Coupe",
                year: 2011,
                price: 30500,
                percentage: 0.02
            }
    ];
    }

    $("#my-grid").handsontable({
        data: getCarData(),
        colHeaders: ["Car", "Year", "Price", "Percentage"],
        cells: CellsHandler,
        beforeChange: BeforeChangeHandler,
        afterSelection: AfterSelectionHandler,
        beforeCellCopy: BeforeCellCopyHandler 
        /* 
           I created this hook to handle cell copy events. 
           https://github.com/handsontable/jquery-handsontable/pull/1856
        */
    });

});