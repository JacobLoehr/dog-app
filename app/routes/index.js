import Route from '@ember/routing/route';
import { service } from "@ember/service";
import dogs from './dogs';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    
    console.log(dogs)
    for (const dog of dogs) {
      this.store.createRecord('dog', dog)
    }
    
    console.log(this.store.peekAll('dog'))
    return this.store.peekAll('dog');
  }
}
