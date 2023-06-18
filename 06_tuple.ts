// tuples
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

// it may be confused , don't use this
console.log(goodRes);
goodRes.push(123);

console.log(goodRes);
goodRes.pop();

console.log(goodRes);
goodRes.pop();
console.log(goodRes);
goodRes.pop();
console.log(goodRes);

const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]]
