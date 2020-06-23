class secondpage {
    constructor(){
        this.schoolwork=createButton("School work")
        this.officework=createButton("Office work")
        this.others=createButton("Others")
        
    }
    displaysp2(){
        this.others.position(615,400)
        this.officework.position(610,300)
        this.schoolwork.position(610,200)

        this.schoolwork.mousePressed(()=>{
             this.officework.hide();
             this.others.hide();
             this.schoolwork.hide(); 
             var tp = new thirdpage();  
         })
        
    }


    
    
    
}