import { test , expect } from "vitest";
import { trier } from "./tri";

test("tester methode trier" , () => {
    const x = [2,7,1,9,5]
    const result = trier(x)
    expect(result).toStrictEqual([1,2,5,7,9])
})

test('array with non numeric elements' , () => {
    const x = ['a','b',12,5]
    expect(()=>trier(x)).toThrowError("array with non numeric elements")
})