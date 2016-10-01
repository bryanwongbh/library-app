import Ember from 'ember';

export default Ember.Component.extend({
	emailAddress: '',
	message: '',
	emailValidation: '',
	emailValidationGlyphicon: '',
	emailValidationText: '',
	messageValidation: '',
	messageValidationGlyphicon: '',
	messageValidationText: '',
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	emailAddressChanged: Ember.observer('emailAddress', function() { 
    if (this.get('isValidEmail')) {
    	this.set('emailValidation', 'has-success');
    	this.set('emailValidationGlyphicon', 'glyphicon-ok');
    	this.set('emailValidationText', 'success');
    } else {
    	this.set('emailValidation', 'has-error');
    	this.set('emailValidationGlyphicon', 'glyphicon-remove');
    	this.set('emailValidationText', 'error');
    }
  }),
	isValidMessageLength: Ember.computed.gte('message.length', 7),
	messageChanged: Ember.observer('isValidMessageLength', function() { 
    if (this.get('isValidMessageLength')) {
    	this.set('messageValidation', 'has-success');
    	this.set('messageValidationGlyphicon', 'glyphicon-ok');
    	this.set('messageValidationText', 'success');
    } else {
    	this.set('messageValidation', 'has-error');
    	this.set('messageValidationGlyphicon', 'glyphicon-remove');
    	this.set('messageValidationText', 'error');
    }
  }),
  isValid: Ember.computed.and('isValidEmail', 'isValidMessageLength'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      alert(`Dear ${this.get('emailAddress')}, thank you for your message, "${this.get('message')}"`);
      this.set('responseMessage', `We got your message and will be in touch soon!`);
      this.set('emailAddress', '');
      this.set('message', '');
      this.set('emailValidation', '');
      this.set('emailValidationGlyphicon', '');
    	this.set('emailValidationText', '');
    	this.set('messageValidation', '');
    	this.set('messageValidationGlyphicon', '');
    	this.set('messageValidationText', '');
    }
  }
});
