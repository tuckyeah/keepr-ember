import DS from 'ember-data';

export default DS.Model.extend({
  done: DS.attr('boolean'),
  notes: DS.attr('string'),
  category: DS.belongsTo('category')
});
