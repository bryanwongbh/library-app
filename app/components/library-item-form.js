import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',
  emailAddressChanged: Ember.observer('model.isValid', function() { 
    console.log('observer is called', this.get('model.isValid')); 
  }),

  actions: {

    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});
