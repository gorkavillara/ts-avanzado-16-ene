it("Debería matchear el toBe con numbers", () => {
    expect(1).toBe(1)
})

describe("Trabajando con objetos", () => {
    it("Debería funcionar con objetos", () => {
        let objA = { id: 1 }
        let objB = objA
      
        expect(objA).toBe(objB)
    })
    it("Deberíamos poder utilizar toBe", () => {
        let objA = { id: 1 }
        let objB = { id: 1 }

        expect(objA).toStrictEqual(objB)
        expect(objA).not.toBe(objB)
    })
})

// Matcher toContain | arrays y strings
it("Debería contener una substring", () => {
    expect("abcdefg").toContain("cde")
})
it("NO debería contener una substring", () => {
    expect("abcdefg").not.toContain("123")
})

it("Debería contener un elemento de un array", () => {
    let objeto = { id: 2 }
    const miArray = [
        { id: 1 }, objeto
    ]

    expect(miArray).toContain(objeto)
    expect(miArray).toContainEqual({ id: 2 })
})