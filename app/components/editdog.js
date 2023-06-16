import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditDogComponent extends Component {
  @tracked showModal = false

  @action
  openModal() {
    this.showModal = true;
  }

  @action
  closeModal() {
    this.showModal = false;
  }
}
