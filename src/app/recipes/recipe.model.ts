import { Ingrident } from '../shared/ingerdient.model';

export class Recipe{
    public name: String;
    public description : String;
    public imagePath: String;
    public ingredients: Ingrident[];
    constructor(name:String, desc:String, imagePath:String, ingredients:Ingrident[])
    {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}