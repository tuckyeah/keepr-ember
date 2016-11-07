import ApplicationAdapter from 'keepr-ember-client/application/adapter';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');

    // serialize() inside of an adapter is an alias for serialize() inside the sibling serializer
    let serialized = this.serialize(record, {includeId: true });

    // a serialized record is an Ember object turned into a JS object
    let categoryId = serialized.category_id;
    console.log(serialized)
    // we can use dot notation here because it's a JS object... but in general, stick to get
    // we can import 'get' from ember, so we don't have to do Ember.get everywhere, we can just do get
    let url = `${api}/categories/${categoryId}/things`;

    let data = { thing: serialized };

    return this.ajax(url, 'POST', {data});
    // same as:
    // return this.ajax({
    //    url,
    //    method: 'POST',
    //    data: data
    // });
  }
});
