class rest{

    constructor(body3,body4, offsetX, offsetY)
	{
		this.offsetX=offsetX
		this.offsetY=offsetY
		var options={
			bodyC:body3,
			bodyD:body4,
			pointD:{x:this.offsetX, y:this.offsetY}
		}
		//console.log(options);
		this.rest=Constraint.create(options)
		World.add(world,this.rest)
	}

	display()
	{
		var pointC=this.rest.bodyC.position;
		var pointD=this.rest.bodyD.position;

		strokeWeight(2);

		var Anchor3X=pointC.x
		var Anchor4Y=pointD.y

		var Anchor3X=pointC.x+this.offsetX
		var Anchor4Y=pointD.y+this.offsetY

		line(Anchor3X,Anchor3Y,Anchor4X,Anchor4Y);
	}

}