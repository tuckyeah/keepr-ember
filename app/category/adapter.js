import ApplicationAdapter from 'keepr-ember-client/application/adapter';

export default ApplicationAdapter.extend({
  createRecord(store, type, record) {
    let api = this.get('host');

    // serialize() inside of an adapter is an alias for serialize() inside the sibling serializer
    let serialized = this.serialize(record, {includeId: true });

    let url = `${api}/categories`;

    let data = { category: serialized };

    console.log(data);

    return this.ajax(url, 'POST', {data});
  //   // same as:
  //   // return this.ajax({
  //   //    url,
  //   //    method: 'POST',
  //   //    data: data
  //   // });
  }
});
