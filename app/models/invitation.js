import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isNotValidEmail: Ember.computed.not('isValidEmail')
});
