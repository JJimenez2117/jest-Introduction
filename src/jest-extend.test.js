expect.extend({
 toBeEqualTwo(number) {
    if (number !==2) {
        return {
            pass: false,
            message: () => `Expected ${number} to be 2`,
        };
    }

    return {
        pass: true,
    };
 },
});

test("number 2", () => {
    expect(2).toBe(2);
});

test("number 2 using customMatcher", () => {
    expect(2).toBeEqualTwo();
});

//https://github.com/jest-community/jest-extended
