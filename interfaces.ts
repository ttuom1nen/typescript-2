interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: "Civic",
    year: new Date(),
    broken: true,
    summary: function() {
        return `Name: ${this.name}`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
