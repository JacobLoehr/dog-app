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
 
  @action
  addDog(event) {
    console.log(event, this)
    event.preventDefault();

    const newDog = this.store.createRecord('dog', {
      name: this.name,
      breed: this.breed,
      owner: this.owner,
      size: this.size,
      description: this.description,
      meals: {
        breakfast: "acorns",
        dinner: "kibble"
      },
      activities: this.activities
    })

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