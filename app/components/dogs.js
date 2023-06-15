import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogsComponent extends Component {
  @tracked query = '';

  @action
  removeDog(dog){
    this.store.peekAll('dog').removeObject(dog);
  }

  @action
  deleteDog(dog) {
    // Delete the dog record from the store
    dog.destroyRecord();
  }
}
