// --- HijriDate Library (Standard Version) ---
(function(global) {
    var HijriDate = {};
    var floor = Math.floor;
    var replace = function(template, data) { return template.replace(/\{([\w\.]*)\}/g, function(str, key) { var keys = key.split("."), v = data[keys.shift()]; for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]]; return (typeof v !== "undefined" && v !== null) ? v : ""; }); };
    var monthDays = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29]; var monthNames = ["Muharram", "Safar", "Rabi'ul Awwal", "Rabi'ul Akhir", "Jamadil Awwal", "Jamadil Akhir", "Rajab", "Sha'ban", "Ramadhan", "Shawwal", "Dhul Qa'ada", "Dhul Hijja"]; var dayNames = ["Ahad", "Ithnin", "Thulatha", "Arbia'a", "Khamees", "Jomu'a", "Sabt"];
    var _HijriDate = function(year, month, date, hour, minute, second, millisecond) {
        if (year instanceof Date) {
            var gdate = year; var gYear = gdate.getFullYear(), gMonth = gdate.getMonth(), gDate = gdate.getDate();
            var julianDayNumber = floor((1461 * (gYear + 4800 + floor((gMonth - 14) / 12))) / 4) + floor((367 * (gMonth - 2 - 12 * (floor((gMonth - 14) / 12)))) / 12) - floor((3 * floor((gYear + 4900 + floor((gMonth - 14) / 12)) / 100)) / 4) + gDate - 32075;
            var l = julianDayNumber - 1948440 + 10632; var n = floor((l - 1) / 10631); l = l - 10631 * n + 354; var j = (floor((10985 - l) / 5316)) * (floor((50 * l) / 17719)) + (floor(l / 5670)) * (floor((43 * l) / 15238)); l = l - (floor((30 - j) / 15)) * (floor((17719 * j) / 50)) - (floor(j / 16)) * (floor((15238 * j) / 43)) + 29;
            month = floor((24 * l) / 709); date = l - floor((709 * month) / 24); year = 30 * n + j - 30;
            this._date = date; this._month = month; this._year = year; this._hour = gdate.getHours(); this._minute = gdate.getMinutes(); this._second = gdate.getSeconds(); this._millisecond = gdate.getMilliseconds();
            var tempGDate = this.toGlobalDate(); this._day = tempGDate.getDay(); return this;
        }
        this._date = date; this._month = month; this._year = year; this._hour = hour || 0; this._minute = minute || 0; this._second = second || 0; this._millisecond = millisecond || 0;
        var gdateInstance = this.toGlobalDate(); this._day = gdateInstance.getDay(); return this;
    };
    _HijriDate.prototype.getFullYear = function() { return this._year; }; _HijriDate.prototype.getMonth = function() { return this._month; }; _HijriDate.prototype.getDate = function() { return this._date; }; _HijriDate.prototype.getHours = function() { return this._hour; }; _HijriDate.prototype.getMinutes = function() { return this._minute; }; _HijriDate.prototype.getSeconds = function() { return this._second; }; _HijriDate.prototype.getMilliseconds = function() { return this._millisecond; }; _HijriDate.prototype.getDay = function() { return this._day; };
    _HijriDate.prototype.toGlobalDate = function() {
        var y = this._year; var m = this._month; var d = this._date;
        var jd = floor((11 * y + 3) / 30) + 354 * y + 30 * m - floor((m - 1) / 2) + d + 1948440 - 386;
        var gYear, gMonth, gDate; var l,n,i,j;
        if (jd > 2299160) { l = jd + 68569; n = floor((4 * l) / 146097); l = l - floor((146097 * n + 3) / 4); i = floor((4000 * (l + 1)) / 1461001); l = l - floor((1461 * i) / 4) + 31; j = floor((80 * l) / 2447); gDate = l - floor((2447 * j) / 80); l = floor(j / 11); gMonth = j + 2 - 12 * l; gYear = 100 * (n - 49) + i + l;
        } else { j = jd + 1402; var k = floor((j - 1) / 1461); l = j - 1461 * k; n = floor((l - 1) / 365) - floor(l / 1461); i = l - 365 * n + 30; gDate = floor((80 * i) / 2447); gMonth = floor(gDate / 11) + i - floor((2447 * floor(gDate/11))/80) ; gYear = 4 * k + n + floor(gMonth/3) - 4716; gMonth = (gMonth + 1) % 13; if(gMonth === 0) gMonth = 1; }
        return new Date(gYear, gMonth - 1, gDate, this._hour, this._minute, this._second, this._millisecond);
    };
    _HijriDate.prototype.getMonthName = function() { return monthNames[this._month - 1]; }; _HijriDate.prototype.getDayName = function() { return dayNames[this._day]; };
    HijriDate.JS = { convert: function(gDate) { return new _HijriDate(gDate); } };
    if (typeof module !== "undefined" && module.exports) { module.exports = HijriDate; } else if (typeof define === "function" && define.amd) { define(HijriDate); } else { global.HijriDate = HijriDate; }
}(this));