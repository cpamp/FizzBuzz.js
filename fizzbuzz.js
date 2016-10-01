(function() {
    function FizzBuzz(begin, end) {
        if(!end || isNaN(end)) { end = 100; }
        if(!begin || isNaN(stat)) { begin = 1; }
        this._begin = begin;
        this._end = end;
        this._fizz = 'Fizz';
        this._buzz = 'Buzz';
        this._fizzer = 3;
        this._buzzer = 5;
    }

    FizzBuzz.prototype.begin = function(val) {
        if(val && !isNaN(val)) { this._begin = val; }
        return this._begin;
    };

    FizzBuzz.prototype.end = function(val) {
        if(val && !isNaN(val)) { this._end = val; }
        return this._end;
    };

    FizzBuzz.prototype.fizz = function(val) {
        if(val) { this._fizz = val; }
        return this._fizz;
    };

    FizzBuzz.prototype.buzz = function(val) {
        if(val) { this._buzz = val; }
        return this._buzz;
    };

    FizzBuzz.prototype.fizzer = function(val) {
        if(val && !isNaN(val)) { this._fizzer = val; }
        return this._fizzer;
    };

    FizzBuzz.prototype.buzzer = function(val) {
        if(val && !isNaN(val)) { this._buzzer = val; }
        return this._buzzer;
    };

    FizzBuzz.prototype.start = function() {
        for(var i = this._begin; i <= this._end; i++) {
            var output =
                i % (this._fizzer * this._buzzer) === 0  ? this._fizz + this._buzz :
                i %  this._fizzer === 0                  ? this._fizz :
                i %  this._buzzer === 0                  ? this._buzz :
                i;
            console.log(output);
        }
    };

    var window = window || void 0;
    if(!window && module && module.exports) { module.exports = FizzBuzz; }
    else if(window) { window.FizzBuzz = FizzBuzz; }
})();