import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class DogsComponent extends Component {
  @tracked query = '';
}
