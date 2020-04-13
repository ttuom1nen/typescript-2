class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `this boats color is ${this.color}`;
  }

  @logError("Oops the boat sank!")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log("Boat sank!");
      }
    };
  };
}

new Boat().pilot;
