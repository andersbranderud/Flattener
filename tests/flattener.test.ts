import {equal} from "assert";
import {Flattener} from "../src/flattener";
import {ArrayUtil} from "./Utility/ArrayUtil";

test('Assert that simple nested array is flattened to correct array.', () => {
    var flattener = new Flattener();
    const inputArray = [ 1, [ 2, [ 3 ] ], 4 ];
    const expectedOutputArray = [ 1, 2, 3, 4 ];

    const outputArray = flattener.flatten(inputArray)
    const isEqual = ArrayUtil.equals(outputArray, expectedOutputArray);
    equal(isEqual, true);
})

test('Assert that simple not nested array is flattened to correct array.', () => {
    var flattener = new Flattener();
    const inputArray = [ 1, 2, 3, 4 ];
    const expectedOutputArray = [ 1, 2, 3, 4 ];

    const outputArray = flattener.flatten(inputArray)
    const isEqual = ArrayUtil.equals(outputArray, expectedOutputArray);
    equal(isEqual, true);
})

test('Assert that empty array returns empty array.', () => {
    var flattener = new Flattener();
    const inputArray = [];
    const expectedOutputArray = [];

    const outputArray = flattener.flatten(inputArray)
    const isEqual = ArrayUtil.equals(outputArray, expectedOutputArray);
    equal(isEqual, true);
})

test('Assert that non-numeric/numeric array flattens correctly', () => {
    var flattener = new Flattener();
    const inputArray = [ 'g', [ 'b', [ 'aa' ] ], 4 ];
    const expectedOutputArray = [ 'g', 'b', 'aa', 4 ];

    const outputArray = flattener.flatten(inputArray)
    const isEqual = ArrayUtil.equals(outputArray, expectedOutputArray);
    equal(isEqual, true);
})

test('Assert that non-numeric/numeric negative array flattens correctly', () => {
    var flattener = new Flattener();
    const inputArray = [ 'g', [ 'b', [ 'aa' ] ], -333 ];
    const expectedOutputArray = [ 'g', 'b', 'aa', -333 ];

    const outputArray = flattener.flatten(inputArray)
    const isEqual = ArrayUtil.equals(outputArray, expectedOutputArray);
    equal(isEqual, true);
})

test('Assert that null input throws exception', () => {
    const flattener = new Flattener();
    const expectedOutputArray = [ 'g', 'b', 'aa', -333 ];
    expect(() => {
        flattener.flatten(null)
    }).toThrow(Error);
})