const LEVELS:any = {
    ONE: 0,
    TWO: 1,
    THREE: 2,
    FOUR: 3,
}

const ORDERS:any = {
    ASC: 'asc',
    DESC: 'desc'
}

export class ArrayTools {

    static orderArray(array: Array<any>, fields:Array<any>, order:string = ORDERS.ASC) { 

        switch (fields.length - 1) {
            case LEVELS.ONE:
                return order == ORDERS.ASC ? 
                array.sort((currentObject,nextObject) => currentObject[fields[LEVELS.ONE]] - nextObject[fields[LEVELS.ONE]]):
                array.sort((currentObject,nextObject) => currentObject[fields[LEVELS.ONE]] - nextObject[fields[LEVELS.ONE]]).reverse() ;

            case LEVELS.TWO:
                return order == ORDERS.ASC ?  
                array.sort((currentObject,nextObject) => currentObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]] - nextObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]]):
                array.sort((currentObject,nextObject) => currentObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]] - nextObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]]).reverse() ;

            case LEVELS.THREE:
                return order == ORDERS.ASC ?  
                array.sort((currentObject,nextObject) => currentObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]][fields[LEVELS.THREE]] - nextObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]][fields[LEVELS.THREE]]):
                array.sort((currentObject,nextObject) => currentObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]][fields[LEVELS.THREE]] - nextObject[fields[LEVELS.ONE]][fields[LEVELS.TWO]][fields[LEVELS.THREE]]).reverse() ;
            default:
                return array;
        }

    }
  
  }
  