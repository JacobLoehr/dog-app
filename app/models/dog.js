import Model, { attr } from '@ember-data/model';

export default class DogModel extends Model {
  @attr name;
  @attr breed;
  @attr owner;
  @attr size;
  @attr description;
  @attr breakfast;
  @attr dinner;
  get meals(){
    return `Breakfast: ${this.breakfast} Dinner: ${this.dinner}`;
  }
  @attr activites;
}