import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogComponent extends Component {
  dog = this.args.dog

  @action
  delete() {
    // Delete the dog record from the store
    this.dog.destroyRecord();
  }
}
