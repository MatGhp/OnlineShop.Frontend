export class Product {
  constructor(
    public  id : number,
    public price : number,
    public color : string,
    public size : number,
    public imageUrl : string,
    public description : string,
    public details : string,
    public category : Category


  ){}
}

export class Category{
  constructor(public id: number, public name : string){}
}

export class UserProfile{
  constructor(
    public id: number,
    public Name : string
  ){}

}
