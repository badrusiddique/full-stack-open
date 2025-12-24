// Global level - Script scope (the outermost block)
let a = 1
const b = 2

{
  // Block scope
  let c = 3
  const d = 4
}

if (true) {
  // Block scope
  let e = 5
  const f = 6
}

function test() {
  // Function's local scope (also block scoped)
  let g = 7
  const h = 8
}

// **Script scope is essentially the "global block":**
// ```
// ┌─────────────────────────────────────────┐
// │ Script Scope (global block)             │
// │  ├── a: 1                               │
// │  └── b: 2                               │
// │                                         │
// │  ┌─────────────────────────────────┐    │
// │  │ Block { }                       │    │
// │  │  ├── c: 3                       │    │
// │  │  └── d: 4                       │    │
// │  └─────────────────────────────────┘    │
// │                                         │
// │  ┌─────────────────────────────────┐    │
// │  │ if block                        │    │
// │  │  ├── e: 5                       │    │
// │  │  └── f: 6                       │    │
// │  └─────────────────────────────────┘    │
// │                                         │
// └─────────────────────────────────────────┘