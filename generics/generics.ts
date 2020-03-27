class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

/**
 * Separate ArrayOfNumbers and ArrayOfStrings classes can be replaced by
 * defining a generic T
 */
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// Give the type when creating instance
new ArrayOfAnything<string>(["x", "y", "z"]);
