import {calculatePasswordStrength} from "../src/calculatePasswordStrength";

describe("Check password strength", () => {
    test("Password is very week if provide smaller password", ()=>{
        expect(calculatePasswordStrength("asd123")).toBe("Very Weak")
    })
})