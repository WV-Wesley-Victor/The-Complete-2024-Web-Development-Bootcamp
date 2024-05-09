function Housekeeper(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        console.log("Cleaning in progress...");
    };
}

var geovana = new Housekeeper("Geovana", 2, ["Bathroom", "Bedroom"]);
console.log(geovana.clean());
