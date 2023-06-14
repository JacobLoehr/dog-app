import Component from '@glimmer/component';

export default class DogsFilterComponent extends Component {
  get results() {
    let { dogs, query } = this.args;

    if (query) {
      dogs = dogs.filter((dog) => dog.name.includes(query));
    }

    return dogs;
  }
}
