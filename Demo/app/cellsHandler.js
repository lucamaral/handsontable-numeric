var CellsHandler = function (row, col, prop) {
    "use strict";

    // I used 'cells' function instead 'columns' because 'format' property is required to format cell value on copy.
    switch (prop) {
    case "price":
        this.type = 'numeric';
        this.format = '$0,0.00';
        this.validator = NumericFormattedValidator;
        this.editor = NumericFormattedEditor;
        break;
    case "percentage":
        this.type = 'numeric';
        this.format = '0.00%';
        this.validator = NumericFormattedValidator;
        this.editor = NumericFormattedEditor;
        break;
    }
};