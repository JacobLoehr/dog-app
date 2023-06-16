import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddDogComponent extends Component {
  @service store;
  @tracked showModal = false

  name = '';
  breed = '';
  owner = '';
  size = '';
  description = '';
  breakfast = '';
  dinner = '';
  activities = '';

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
      activities: this.activities.split(',')
    })
    this.showModal = false
  
    this.name = '';
    this.breed = '';
    this.owner = '';
    this.size = '';
    this.description = '';
    this.breakfast = '';
    this.dinner = '';
    this.activities = '';
  }

  @action
  addActivity() {
  }

  @action
  removeActivity() {
  }

}