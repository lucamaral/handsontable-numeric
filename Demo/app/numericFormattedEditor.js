"use strict";

var TextEditor = Handsontable.editors.TextEditor;
var NumericFormattedEditor = TextEditor.prototype.extend();

NumericFormattedEditor.prototype.beginEditing = function (initialValue) {
    var format = this.cellProperties.format;
    var formattedValue = numeral(this.originalValue).format(format);
    TextEditor.prototype.beginEditing.apply(this, [formattedValue]);
    this.TEXTAREA.select();
};