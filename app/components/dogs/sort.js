import Component from '@glimmer/component';

export default class DogsSortComponent extends Component {
  get results() {
    let { dogs } = this.args;

    dogs = dogs.sortBy('name')

    return dogs;
  }
}