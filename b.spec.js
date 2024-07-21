test("CR vs LF", () => expect(process.env.USE_CR ? "\r" : "\n").toMatchSnapshot());
