export class Product {
  constructor(
    public  $key : string,
    public name : string,
    public price : number,
    public color : string,
    public size : number,
    public imageUrl : string,
    public description : string,
    public details : string,



  ){}

  static fromJson({$key, name, price, color, size, imageUrl, description ,details}) {
    return new Product($key, name, price, color, size, imageUrl, description ,details);
  }

  static fromJsonArray(json : any[]) : Product[] {
    return json.map(Product.fromJson);
  }
}

export class Category{
  constructor(public id: number, public name : string){}

  static fromJson({$key, name}) {
    return new Category($key, name);
  }

  static fromJsonArray(json : any[]) : Category[] {
    return json.map(Category.fromJson);
  }
}

export class UserProfile{
  constructor(
    public id: number,
    public Name : string
  ){}
  static fromJson({$key, name}) {
    return new UserProfile($key, name);
  }

  static fromJsonArray(json : any[]) : UserProfile[] {
    return json.map(UserProfile.fromJson);
  }

}
