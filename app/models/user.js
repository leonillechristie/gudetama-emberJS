import DS from 'ember-data';

export default DS.Model.extend({
  userid: DS.attr(),
  avatar: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  password: DS.attr()
});
