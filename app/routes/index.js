import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/dogs.json');
    let { data } = await response.json();
    
    return data;
}
}