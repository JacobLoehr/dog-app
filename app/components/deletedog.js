import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogFormComponent extends Component {
  @action
  deleteDog(dog) {
    let currentDog = store.peekRecord('dog');
    currentDog.deleteRecord();
    currentDog.isDeleted;
    currentDog.save();
  }
}