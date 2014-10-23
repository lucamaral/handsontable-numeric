var AfterSelectionHandler = function (r, c, r2, c2) {
    "use strict";

    var HOT = $("#my-grid").handsontable("getInstance");
    var cellValue = HOT.getDataAtCell(r2, c2);
    $("#selected-cell-input").val(cellValue);
};