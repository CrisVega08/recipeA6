export class Recipe {
  public name: string;
  public description: string;
  public imgUrl: string;

  constructor (name: string, des: string, img: string) {
    this.name = name;
    this.description = des;
    this.imgUrl = img;
  }
}
