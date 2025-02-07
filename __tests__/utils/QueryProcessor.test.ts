import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrewid', () => {
        const query = "andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("mraza2"));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe(("Ammar"));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should multiple numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 10?")).toEqual("50");
        expect(QueryProcessor("What is 12 multiplied by 2?")).toEqual("24");
    });

    test('should minus numbers', () => {
        expect(QueryProcessor("What is 5 minus 2?")).toEqual("3");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });
});
