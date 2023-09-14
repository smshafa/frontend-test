import {IRecipe} from "./IRecipe";

export interface IUser {
  id: number,
  name: string,
  recipe: IRecipe[]
}
