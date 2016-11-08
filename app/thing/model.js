import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default DS.Model.extend(DS.EmbeddedRecordsMixin, {
  name: DS.attr('string'),
  categories: hasMany('category'),
  contents: hasMany('category-content', {embedded: 'always'}),
  content_id: DS.attr('number')
  // done: Ember.computed.alias('content.done'),
  // // content_data: Ember.computed(function() {
  // //   let arr = this.get('contents');
  // //   console.log(arr);
  // //   // return arr
  // //   // let contents = this.get('store').findRecord('category-content', this.id);
  // //   // // contents.filter('done')
  // //   // // console.log(contents);
  // //   // return contents;
  // // }),
  // category_id: Ember.computed(function(){
  //   console.log(this.get('contents'))
  // })
});
