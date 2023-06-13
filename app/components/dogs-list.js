import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DogsListComponent extends Component {
  @action
  showDog(dog) {
    alert(`The dog's name is ${dog}!`);
  }
}