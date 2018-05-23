/* airPlane constructor function that take parameters model, seatingCapacity and maximumSpeed */
	function airPlane(model,seatingCapacity,maximumSpeed){
		
		this.model=model;
		this.seatingCapacity=seatingCapacity;
		this.maximumSpeed=maximumSpeed;
		
		this.print=function print(){ //print method returns model, seatingCapacity and maximumSpeed properties
        return "model: "+this.model+" , "+"Seating capacity: "+this.seatingCapacity+" , "+"Maximum speed: "+this.maximumSpeed;
    }
}



