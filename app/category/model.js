import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category_contents: DS.hasMany('category_contents')
});
