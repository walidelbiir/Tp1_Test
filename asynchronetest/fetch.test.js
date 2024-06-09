import {expect, test } from "vitest"
import { fetchRandomUser } from "./fetch"



test('tester fetch random user', async () => {
    const result = await fetchRandomUser()
    expect(result).toBeDefined()
    try { 
        expect(typeof result == 'object').toBe(true)
    }catch(e) {
        throw new Error('not a json')
    }
})