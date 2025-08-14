import sum from "../sum.ts";

test("sum of 2 numbers",()=>{
    expect(sum(1,2)).toBe(3)
});

test("incorrect sum of 2 numbers",()=>{
    expect(sum(1,2)).not.toBe(4)
});