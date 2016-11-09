import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showDetails (thing) {
      let cat_id = this.get('router.router.state.params.category.category_id');
      // console.log(cat_id)
      // console.log(this.get('router.router.state'));
      // this.get('store').queryRecord('category-content', {
      //   thing_id: thing.id,
      //   category_id: cat_id})
      this.get('store').findRecord('category-content', thing.id)
      .then((content) => {
        this.transitionTo('category-content', content);
      });
    },
    toggleDone(thing) {
      console.log(thing);
      this.get('store').findRecord('category-content', thing.id)
      .then((content)=> {
        console.log(thing);
        console.log(content);
      });
    }
  }
});
