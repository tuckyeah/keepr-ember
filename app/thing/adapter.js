import ApplicationAdapter from 'keepr-ember/application/adapter';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');

    // serialize() inside of an adapter is an alias for serialize() inside the sibling serializer
    let serialized = this.serialize(record, {includeId: true });

    // a serialized record is an Ember object turned into a JS object
    let categoryId = record.record.category.id;

    let url = `${api}/categories/${categoryId}/things`;

    let data = { thing: serialized };

    return this.ajax(url, 'POST', {data});
  }
});
