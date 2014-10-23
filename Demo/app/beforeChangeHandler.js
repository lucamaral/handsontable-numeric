var BeforeChangeHandler = function (changes, source) {
    "use strict";

    /*      
        		Of course, there are many situations that I could handle in this function.
        		I only demonstrated a simple case that help user on typing percentage values.
        		Because is easier typing a percentage value as '10' than '0.1'
        */
    var HOT = $("#my-grid").handsontable("getInstance");
    for (var i = 0; i < changes.length; i++) {
        var cellChange = changes[i];
        var col = cellChange[1];
        var newCellValue = cellChange[3];
        if (col === "percentage") {

            var hasExhibitionSuffix = new RegExp("%$").test(newCellValue);

            if (!hasExhibitionSuffix) {
                newCellValue += "%";
            }

        }
        cellChange[3] = numeral().unformat(newCellValue);
    }
};