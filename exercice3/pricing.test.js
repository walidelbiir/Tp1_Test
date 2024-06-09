import { test, expect } from 'vitest';
import { isPriceInRange } from './pricing'

test('isPriceInRange returns true when price is within the range', () => {
 expect(isPriceInRange(100, 50, 200)).toBe(true)
 expect(isPriceInRange(50, 50, 200)).toBe(true)
 expect(isPriceInRange(200, 50, 200)).toBe(true)
})

test('isPriceInRange returns false when price is below the range', () => {
 expect(isPriceInRange(49, 50, 200)).toBe(false)
})

test('isPriceInRange returns false when price is above the range', () => {
 expect(isPriceInRange(201, 50, 200)).toBe(false)
})

test('isPriceInRange returns false when price is exactly at the lower limit', () => {
 expect(isPriceInRange(50, 50, 200)).toBe(true)
})

test('isPriceInRange returns false when price is exactly at the upper limit', () => {
 expect(isPriceInRange(200, 50, 200)).toBe(true)
})
