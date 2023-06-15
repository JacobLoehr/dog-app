import Controller from '@ember/controller';

export default Controller.extend({
  isShowingModal: false,
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal');
    }
  }
});