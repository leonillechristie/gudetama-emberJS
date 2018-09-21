import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://gudetama.local:8000',
	namespace: 'api/v1'
});
