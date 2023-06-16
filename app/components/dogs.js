import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogsComponent extends Component {
  @service store;
  @tracked query = '';

  @action
  deleteDog(dog) {
    // Delete the dog record from the store
    dog.destroyRecord();
  }
  
  @action
  updateAttribute(dog, attribute, event) {
    dog.set(attribute, event.target.value);
  }
}
