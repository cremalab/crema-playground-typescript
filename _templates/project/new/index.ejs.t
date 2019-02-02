---
to: projects/<%= name %>/index.ts
---
<%_ var capitalize = word => word.split('').map((x, y) => y === 0 ? x.toUpperCase() : x.toLowerCase()).join(''); _%>
<%_ var nameCap = capitalize(name); _%>
// Define
type <%= nameCap %> = (a: number, b: number) => number

// Implement
export const <%= name %>: <%= nameCap %> = (x, y) => x + y
