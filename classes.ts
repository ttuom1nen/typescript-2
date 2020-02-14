class Vehicle {

    constructor(public color: string){

    }

    // protected: available only in child class
    protected honk(): void{
        console.log("Honk! Honk!")
    }
}

class Car extends Vehicle{
    constructor(public horsePower: number, color: string) {
        super(color)
    }

    // private: available only within class
    private drive(): void{
        console.log("vehicle drive")
    }

    // public: available from outside. Default.
    public startDriving(): void {
        this.drive()
        this.honk()
    }
}

const nissan = new Car(105, "red")
nissan.startDriving()