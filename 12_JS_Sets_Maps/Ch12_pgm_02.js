const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway']

const setA = new Set(a);
const setB = new Set(b);

// Find union of a and b
const unionSet = new Set([...setA, ...setB]);
console.log('Union of a and b:', [...unionSet]);

// Find intersection of a and b
const intersectionSet = new Set([...setA].filter(item => setB.has(item)));
console.log('Intersection of a and b:', [...intersectionSet]);

// Find difference of a and b 
const differenceSet = new Set([...setA].filter(item => !setB.has(item)));
console.log('Difference of a and b:', [...differenceSet]);
// Find a union b
// Find a intersection b
// Find a with b