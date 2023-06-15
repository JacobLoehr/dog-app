import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogsComponent extends Component {
  @service store;
  @tracked query = '';
  @tracked query2 = '';

  @action
  deleteDog(dog) {
    // Delete the dog record from the store
    dog.destroyRecord();
  }
  
  @action
  updateAttribute(dog, attribute, event) {
    dog.set(attribute, event.target.value);
  }

  @action
  saveDog(dog) {
    dog.save();
  }
}
