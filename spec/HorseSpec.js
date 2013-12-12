describe("Horse", function() {
	var horse = new window.animallib.AnimalFactory().createAnimal({animalType: 'horse'});
	var fox = new window.animallib.AnimalFactory().createAnimal({animalType: 'fox'});
	var dog = new window.animallib.AnimalFactory().createAnimal({animalType: 'dog'});

    it("replies nay when contacted", function() {
        expect(horse.receiveMessage(null)).toEqual("nay");
    });

    it("calls receiveMessage(sender, '.... . .-.. .-.. ---' when communicating with a fox", function(){
    	spyOn(fox, "receiveMessage");
    	horse.comunicateWith(fox);
    	expect(fox.receiveMessage).toHaveBeenCalledWith(horse, '.... . .-.. .-.. ---');
    });

    it("calls receiveMessage(sender, 'nay' when communicating with a non-fox", function(){
    	spyOn(dog, "receiveMessage");
    	horse.comunicateWith(dog);
    	expect(dog.receiveMessage).toHaveBeenCalledWith(horse, 'nay');
    });
});