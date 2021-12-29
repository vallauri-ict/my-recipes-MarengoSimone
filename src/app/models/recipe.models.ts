import { IngredientModel } from "./ingredient.models";

export class RecipeModel {
    public id:string;
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients:IngredientModel[];

    constructor(name:string,desc:string,img:string){
        this.name=name
        this.description=desc
        this.imagePath=img
    }
}