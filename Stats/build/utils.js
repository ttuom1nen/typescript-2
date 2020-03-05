"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    var parts;
    (function (parts) {
        parts[parts["Year"] = 2] = "Year";
        parts[parts["Month"] = 1] = "Month";
        parts[parts["Day"] = 0] = "Day";
    })(parts || (parts = {}));
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dateParts[parts.Year], dateParts[parts.Month] - 1, dateParts[parts.Day]);
};
