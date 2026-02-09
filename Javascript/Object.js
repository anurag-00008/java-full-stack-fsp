var product={
    pid:'P1',
    pname:'AC',
    pqty:5,
    price:20000.00
}
console.log(product.pid,product.pname,product.pqty,product.price);
//add a element into existiong obj
product.company='SONY';
console.log(product.pid,product.pname,product.pqty,product.price,product.company);
//delete component in object
delete product.company;
console.log(product);
var employee={
    eid:1,
    ename:'ANU',
    address:{
        plotno:'AB10',
        streetnm:'KHIDIRPUR',
        area:{
            ps:'TRAM DEPOT P.S',
            dist:'SOUTH KOLKATA'
        }
    }
}
console.log(employee.ename,employee.address.streetnm,employee.address.area.ps,employee.address.area.dist);