'use strict';
describe('caloryFilter', function () {

    var data;
    beforeEach(module("ngCooking"));


    it('test Status filter ',inject( function (caloryFilterFilter) {

        data=[];
        data.push({"name":"boeuf","calories":100});
        data.push({"name":"boeuf","calories":200});
        data.push({"name":"boeuf","calories":300});
        data.push({"name":"boeuf","calories":600});
        data.push({"name":"boeuf","calories":900});

        expect(caloryFilterFilter(data,0,100)[0]).toBe(data[0]);
        expect(caloryFilterFilter(data,101,299)[0]).toBe(data[1]);
        expect(caloryFilterFilter(data,250,500)[0]).toBe(data[2]);
        expect(caloryFilterFilter(data,500,700)[0]).toBe(data[3]);
        expect(caloryFilterFilter(data,800,1000)[0]).toBe(data[4]);
        expect(caloryFilterFilter(data,0,1000)).toEqual(data);

    }))
});