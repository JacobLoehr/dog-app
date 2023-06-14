import Route from '@ember/routing/route';
import { service } from "@ember/service";
import dogs from './dogs';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    /** 
    console.log(dogs)
    let response = await (await fetch('/api/dogs.json')).json()
    for (const dog of response.data) {
      this.store.createRecord('dog', dog)
    }
    */
    return response.data;
}
}