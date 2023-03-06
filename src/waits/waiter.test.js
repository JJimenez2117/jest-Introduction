import { getText } from "./index";
import { getQuote } from "./index";


//callbacks
test("getText", (done) => {
    getText((value) => {
        expect(value).toBe(
            "Hello team, hope we are doing great"
        );
        done();
    });
});

//Promise
test("getQuote", () => {
    return expect(getQuote()).resolves.toBe("It's getting kinda late");
});

//async wait
test("getQuoteWithAsync", async() => {
    const quote = await getQuote()

    expect(quote).toBe("It's getting kinda late");
});

