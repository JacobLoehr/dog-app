import Model, { attr } from '@ember-data/model';

export default class DogModel extends Model {
  @attr('string') name;
  @attr('string') breed;
  @attr('string') owner;
  @attr('string') size;
  @attr('string') description;
  //@attr breakfast;
  //@attr dinner;
  //get meals(){
    //return `Breakfast: ${this.breakfast} Dinner: ${this.dinner}`;
  //}
  @attr meals;
  @attr activites;
}