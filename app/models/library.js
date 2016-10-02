import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('string'),
  books: DS.hasMany('book'),

  isValidLibraryName: Ember.computed.notEmpty('name'),
  isNotValidLibraryName: Ember.computed.not('isValidLibraryName')
});
