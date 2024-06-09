import { expect} from "vitest";
import {test} from "vitest"
import { add } from "./math";


test("test de la fonction add" , () => {
    const result = add(2,3)
    expect(result).toBe(5)
})