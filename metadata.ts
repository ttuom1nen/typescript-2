import "reflect-metadata";
// Reflect global

const plane = {
  color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 10, plane);
console.log(plane); // { color: red }

const note = Reflect.getMetadata("note", plane);
console.log(note); // hi there

const height = Reflect.getMetadata("height", plane);
console.log(height); // 10

// Get object property:
const planeColor = Reflect.defineMetadata("note", "hi there", plane, "color");
console.log(planeColor);

/*----------*/

class Plane {
  color: string = "red";

  @markFunction("secret information!")
  fly(): void {
    console.log("vrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
