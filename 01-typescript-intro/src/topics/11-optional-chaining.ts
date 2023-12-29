export interface Passenger{
    name: string;
    children?: string[];
    
}
const passenger1: Passenger={
    name: 'Victor',
}
const passenger2: Passenger={
    name: 'Santiago',
    children: ['Andres','Carlos']
}

const printChildren =(passenger:Passenger): number=>{

    // if(!passenger.children )return 0;

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length ;

    console.log(passenger.name, howManyChildren);
    return(howManyChildren)
}
printChildren(passenger1);