import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest'

// docs: https://vitest.dev

describe('Test suite', () => {
    beforeEach(() => {});
    afterEach(() => {});
    beforeAll(() => {});
    afterAll(() => {});
    
    it.todo('Planned test case');
    it.skip('Ignored test case', () => {});
    // it.only('Focused test case', () => {});

    it('A test case', () => {
        expect(1).toBe(1); // compares references
        expect([1, 2, 3]).toEqual([1, 2, 3]); // deep equality
        expect(1).not.toEqual(2);
        expect(1).toBeLessThan(2);
        expect(0.9999).toBeCloseTo(1);

        expect([1, 2, 3]).toContain(2);
        
        expect(vi).toBeDefined();
        expect(() => document).toThrowError(/not defined/);
    });

    it('Using a spy', () => {
        const aSpy = vi.fn((a: number) => 'hello');
        aSpy(42);
        expect(aSpy).toHaveBeenCalled();
        expect(aSpy).toHaveBeenCalledTimes(1);
        expect(aSpy).toHaveBeenCalledWith(42)
    });

    it.each([
        [1, 2, 3],
        [2, 4, 6],
    ])('Test case with multiple examples: %d + %d = %d', (a, b, c) => {
        expect(a+b).toEqual(c);
    })
});
