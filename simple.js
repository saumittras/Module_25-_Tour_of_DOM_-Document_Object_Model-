function myFunction(a, b) {
  const keys = Object.keys(a);
  if (keys.includes(b) === true && a.b !== null) {
    return true;
  } else {
    return false;
  }
}

const ob1 = { a: 1, b: 2, c: 3 };
const ob2 = { x: "a", y: null, z: "c" };

const key = Object.keys(ob1);
console.log(key);

const value = Object.values(ob2);
console.log(value);
console.log(myFunction(ob2, "y"));
