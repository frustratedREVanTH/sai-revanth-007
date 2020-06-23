class thirdpage {
    constructor(){
        this.back=createButton("Back")
    }

displaytp3(){
    this.back.position(30,50)
    this.back.mousePressed(()=>{
    this.back.hide();
    sp.displaysp2();

    })
}


}