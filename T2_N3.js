/*Escriu una function creadora d'objectes que faci instàncies
 d'una classe abstracta. Invoca-la amb diferents definicions. */

class AbstractClass {
    constructor(x) {
        this.x = x;
        if(this.constructor === AbstractClass){
            throw new TypeError('Abstract class cannot be instantiated directly');
        }
    }
}

class SubClass extends AbstractClass {
    constructor(x, y) {
        super(x);
        this.y = y;
    }
};
 
 const ObjCreator = (x,y) => new SubClass(x,y);

 var NO = ObjCreator(5,3);
 console.log(NO);
 var NO2 = ObjCreator("A","B");
 console.log(NO2);

 //new AbstractClass(1); // throws error