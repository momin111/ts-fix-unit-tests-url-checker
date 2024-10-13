import {calculatePasswordStrength} from "../src/calculatePasswordStrength";

describe("Check password strength", () => {
    test("Password is very week if provide smaller password", ()=>{
        expect(calculatePasswordStrength("asd123")).toBe("Very Weak")
    })
    test("Password is week if provide minimum password requirements", ()=>{
        expect(calculatePasswordStrength("asdgh1238")).toBe("Weak")
    })
    test("Password is moderate if provide average password requirements", ()=>{
        expect(calculatePasswordStrength("ASDFG12384454")).toBe("Moderate")
    })
    test("Password is strong if provide all password requirements", ()=>{
        expect(calculatePasswordStrength("asd&%/gh1238")).toBe("Strong")
    })
})