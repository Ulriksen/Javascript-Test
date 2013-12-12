describe("Dog", function() {
	var dog = new window.animallib.AnimalFactory().createAnimal({animalType: 'dog'});
	var horse = new window.animallib.AnimalFactory().createAnimal({animalType: 'horse'});

    it("replies woof when contacted", function() {
        expect(dog.receiveMessage(null)).toEqual("woof");
    });

    it("calls receiveMessage(sender, 'woof' when communicating", function(){
    	spyOn(horse, "receiveMessage");
    	dog.comunicateWith(horse);
    	expect(horse.receiveMessage).toHaveBeenCalledWith(dog, 'woof');
    });
});