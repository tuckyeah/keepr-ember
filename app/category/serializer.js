import ApplicationSerializer from 'keepr-ember-client/application/serializer';
import Ember from 'ember';

export default ApplicationSerializer.extend({
  auth: Ember.inject.service(),
  serialize() {
    let serialized = this._super(...arguments);
    serialized.user_id = this.get('auth.credentials.id');
    return serialized;
  },
  normalize(model, response) {
    return this._super(model, response);
  }
});
