beforeAll(() => {
    console.log("Yesss we're starting!!!");
});

beforeEach(() => {
    console.log("Setup device");
});

afterAll(() => {
    console.log("We're done!!!");
});

afterEach(() => {
    console.log("Recover Phone");
});

test("first test", () => {
    console.log("primera prueba"); 
    expect(true).toBe(true);
});

test("second test", () => {
    console.log("segunda prueba"); 
    expect(false).toBe(false);
});