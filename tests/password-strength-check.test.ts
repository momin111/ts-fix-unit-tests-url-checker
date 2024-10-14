import {calculatePasswordStrength} from "../src/calculatePasswordStrength";

describe("Check password strength", () => {
    test("Password is very week if password is less than 8", ()=>{
        expect(calculatePasswordStrength("asd123")).toBe("Very Weak")
    })
    test("Password is very week if provide password is empty", ()=>{
        expect(calculatePasswordStrength(" ")).toBe("Very Weak")
    })
    test("Password is week if provide only small letter", ()=>{
        expect(calculatePasswordStrength("asdfghjkuyree")).toBe("Weak")
    })
    test("Password is week if provide only numbers", ()=>{
        expect(calculatePasswordStrength("121212345674")).toBe("Weak")
    })
    test("Password is week if provide only special characters", ()=>{
        expect(calculatePasswordStrength("^%^%^%^*&&%%")).toBe("Weak")
    })
    test("Password is very week if provide only capital letters less than 12", ()=>{
        expect(calculatePasswordStrength("ASDFREWSHK")).toBe("Very Weak")
    })
    test("Password is week if provide only capital letters more than 12", ()=>{
        expect(calculatePasswordStrength("ASDFREWSHKPPOI")).toBe("Weak")
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
    test("Password is moderate if provide all password requirements but less than 12", ()=>{
        expect(calculatePasswordStrength("asd&%/gh123")).toBe("Moderate")
    })
})