import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DogComponent extends Component {
  dog = this.args.dog

  @action
  delete() {
    // Delete the dog record from the store
    this.dog.destroyRecord();
  }
}
