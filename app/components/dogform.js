import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import DogModel from '../models/dog';

export default class DogFormComponent extends Component {
  @service store;

  name = '';
  breed = '';
  owner = '';
  size = '';
  description = '';
  meals = '';
  activities = '';
  // Add more attribute variables for other dog attributes
 
  @action
  addDog(event) {
    console.log(event, this)
    event.preventDefault();

    // Create a new dog object with the captured attributes
    const newDog = this.store.createRecord('dog', new DogModel(
       this.name,
      this.breed,
       this.owner,
       this.size,
       this.description,
       {
        breakfast: "acorns",
        dinner: "kibble"
      },
       this.activities

      // Add more attributes

      // You can assign any other default values or handle data validation here
    ))

    // Add the new dog to the array
    newDog.save();

    // Clear the form inputs
    this.name = '';
    this.breed = '';
    this.owner = '';
    this.size = '';
    this.description = '';
    this.meals = '';
    this.activities = '';
    // Reset other attribute variables
  }

  @action
  updateAttribute(attribute, event) {
    this[attribute] = event.target.value;
  }
}