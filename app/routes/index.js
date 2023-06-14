import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { getJSON } from '@ember/ajax';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    console.log(dogs);
    //let response = await (await fetch('/api/dogs.json')).json();
    // Fetch the dog data
    const response = await getJSON('/dogs.json');
    const dogsData = response.data;
    // Load the dog data into the Ember Data store
    const dogs = dogsData.map(dog => {
      return this.store.createRecord('dog', dog);
    });
    //return this.store.findAll('dogs');
  }
}
