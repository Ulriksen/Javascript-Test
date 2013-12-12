describe("Fox", function() {
	var horse = new window.animallib.AnimalFactory().createAnimal({animalType: 'horse'});
	var fox = new window.animallib.AnimalFactory().createAnimal({animalType: 'fox'});
	var dog = new window.animallib.AnimalFactory().createAnimal({animalType: 'dog'});
    
    it("replies ??? when contacted by non-horse", function() {
        expect(fox.receiveMessage(null, "nay")).toEqual("???");
    });

    it("replies '.... . .-.. .-.. ---' when contacted by a horse", function() {
        expect(fox.receiveMessage(horse, "nay")).toEqual(".... . .-.. .-.. ---");
    });

    it("calls receiveMessage(sender, '.... . .-.. .-.. ---' when communicating with a horse", function(){
    	spyOn(horse, "receiveMessage");
    	fox.comunicateWith(horse);
    	expect(horse.receiveMessage).toHaveBeenCalledWith(fox, '.... . .-.. .-.. ---');
    });

    it("calls receiveMessage(sender, '???' when communicating with a non-horse", function(){
    	spyOn(dog, "receiveMessage");
    	fox.comunicateWith(dog);
    	expect(dog.receiveMessage).toHaveBeenCalledWith(fox, '???');
    });
});