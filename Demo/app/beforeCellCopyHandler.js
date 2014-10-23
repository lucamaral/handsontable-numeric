var BeforeCellCopyHandler = function (cellValue, row, col) {
    "use strict";

    var HOT = $("#my-grid").handsontable("getInstance");
    var cellMeta = HOT.getCellMeta(row, col);
    if (cellMeta.format) {
        return numeral(cellValue).format(cellMeta.format);
    }
    return cellValue;
};