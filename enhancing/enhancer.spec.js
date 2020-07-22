const enhancer = require('./enhancer.js');
// test away!

describe("repair()", () => {
    it("should set item's durability to 100", () => {
        const testItem = {
            name: "Sword of Jest",
            durability: 20,
            enhancement: 5
        }
        enhancer.repair(testItem) // Run repair item
        expect(testItem.durability === 100)
    })
})
describe("fail()", () => {
    it("should reduce the durability of item by 5 when enhancement level is less than 15", () => {
        const testItem = {
            name: "Sword of Jest",
            durability: 20,
            enhancement: 5
        }
        enhancer.fail(testItem) // Run repair item
        expect(testItem.durability === 15)
    })
    it("should reduce the durability of item by 10 when enhancement level is equal to 15", () => {
        const testItem = {
            name: "Sword of Jest",
            durability: 20,
            enhancement: 15
        }
        enhancer.fail(testItem) // Run repair item
        expect(testItem.durability === 10)
    })
    it("should reduce the durability of item by 10, and reduce enhancement level by 1 when enhancement level is greater than 16", () => {
        const testItem = {
            name: "Sword of Jest",
            durability: 20,
            enhancement: 17
        }
        enhancer.fail(testItem) // Run repair item
        expect(testItem.durability === 10 && testItem.enhancement === 16)
    })
})
describe("success()", () => {
    it("should increase item's enhancement level by 1 if the enhancement level is less than 20", () => {
        const testItem = {
            name: "Sword of Jest",
            durability: 20,
            enhancement: 15
        }
        enhancer.success(testItem) // Run repair item
        expect(testItem.enhancement === 16)
    })
    it("shouldn't increase item's enhancement level by 1 if the enhancement level is equal to 20", () => {
        const testItem = {
            name: "Sword of Jest",
            durability: 20,
            enhancement: 20
        }
        enhancer.success(testItem) // Run repair item
        expect(testItem.enhancement === 20)
    })
})
//describe("success")
//describe("get")
