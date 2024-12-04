const fs = require("fs")
const input = fs.readFileSync("i.txt", { encoding: "utf-8" })
const data = input.split("\r\n").map((l) => {
    let nl = l.split("  ")
    nl = nl.map((p) => Number(p))
    return nl
})
const left = data.map((l) => l[0]).sort((a, b) => a - b)
const right = data.map((l) => l[1]).sort((a, b) => a - b)
const diff = []
for (let i = 0; i < left.length; i++) {
    diff.push([left[i], right[i], Math.abs(left[i] - right[i])])
}
const totaldiff = diff.reduce((acc, prev) => (acc += prev[2]), 0)
const sim = left.map((l) => {
    const nos = right.filter((r) => r === l)
    return nos.length * l
})
const simTotal = sim.reduce((acc, prev) => (acc += prev), 0)
console.log(simTotal)
