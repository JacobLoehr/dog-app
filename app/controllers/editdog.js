import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditDogController extends Controller {
  name = 'test';

  @action
  submit() {
    window.alert('Successfully submitted form data!');
  }
}
