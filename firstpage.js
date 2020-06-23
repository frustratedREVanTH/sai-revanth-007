class firstpage{
    constructor(){
     this.input=createInput("Name")
     this.getstarted=createButton(" Get Started")
     this.title=createElement("h1")
    }
display (){
    this.title.html("Study organiser")
    this.title.position(575,0)
    this.getstarted.position(610,400)
    this.input.position(575,200)

    this.getstarted.mousePressed(()=>{
    this.input.hide();
    this.getstarted.hide();
    var sp = new secondpage();
    sp.displaysp2();

    


    })
}
}
