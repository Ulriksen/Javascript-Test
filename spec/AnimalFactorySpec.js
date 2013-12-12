describe("Animal Factory", function() {
    it("can create dog", function() {
    	var factory = new window.animallib.AnimalFactory();
        expect(factory.createAnimal({animalType: 'dog'}) instanceof window.animallib.Dog).toBe(true);
    });
    it("can create fox", function() {
    	var factory = new window.animallib.AnimalFactory();
        expect(factory.createAnimal({animalType: 'fox'}) instanceof window.animallib.Fox).toBe(true);
    });
    it("can create horse", function() {
    	var factory = new window.animallib.AnimalFactory();
        expect(factory.createAnimal({animalType: 'horse'}) instanceof window.animallib.Horse).toBe(true);
    });
});