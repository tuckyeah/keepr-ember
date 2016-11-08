import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import Ember from 'ember';

export default DS.Model.extend({
  done: DS.attr('boolean'),
  notes: DS.attr('string'),
  category: belongsTo('category'),
  thing: belongsTo('thing'),
  name: Ember.computed.alias('thing.name'),

  note_list: Ember.computed('notes', function() {
    return this.get('notes').split('\n');
  })
});

// /category_contents
// id of the join (category_contents/:id)
// save it into a local variable - new thing
// have the same route take care of associating things
// the create action will receive a thing that has both a key and an object
// save data store instance, then do save()
