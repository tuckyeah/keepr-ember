import ApplicationSerializer from 'keepr-ember-client/application/serializer';
import Ember from 'ember';

export default ApplicationSerializer.extend({
  serialize() {
    let serialized = this._super(...arguments);
    return serialized;
  },
  normalize(model, response) {
    return this._super(model, response);
  }
});
