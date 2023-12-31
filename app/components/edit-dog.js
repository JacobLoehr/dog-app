import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class EditDogComponent extends Component {
  @service store;
  @tracked showModal = false

  name = this.args.dog.name
  breed = this.args.dog.breed
  owner = this.args.dog.owner
  size = this.args.dog.size
  description = this.args.dog.description
  breakfast = this.args.dog.meals.breakfast
  dinner = this.args.dog.meals.dinner
  _activities = this.args.dog.activities

  set activities(newActivities) {
    this._activities = newActivities.split(',')
  }

  get activities() {
    return this._activities
  }

  @action
  openModal() {
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }

  @action
  save() {
    // assume names are unique
    const newDog = this.store.createRecord('dog', {
      name: this.name,
      breed: this.breed,
      owner: this.owner,
      size: this.size,
      description: this.description,
      meals: {
        breakfast: this.breakfast,
        dinner: this.dinner
      },
      activities: this._activities
    })
  
    this.args.dog.destroyRecord()
  }
}
