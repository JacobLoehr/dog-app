import Route from '@ember/routing/route';
import { service } from "@ember/service";
import dogs from './dogs';
import { action } from '@ember/object';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    
    console.log(dogs)
    for (const dog of dogs) {
      this.store.createRecord('dog', dog)
    }
    
    return this.store.peekAll('dog')
  }
}
