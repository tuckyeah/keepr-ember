import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('category', params.category_id);
  },

  actions: {
    deleteThing (thing) {
      let cat_id = this.get('router.router.state.params.category.category_id');
      this.get('store').queryRecord('category-content', {
        thing_id: thing.id,
        category_id: cat_id})
      .then((content)=> {
        content.deleteRecord();
        content.save();
        this.refresh();
      }).catch((err) => {
        console.error(err);
      });
    },
    edit (category) {
      this.transitionTo('category.edit', category);
    },
    createThing (newThing) {
      let thing = this.get('store').createRecord('thing', newThing);
      return thing.save()
      .then((response)=> {
        let contents = this.get('store').createRecord('category-content', {
          thing: response,
          category: response.category
        });
        // console.log(contents);
        // console.log(contents.save());
        return contents.save();
      }).then((response)=> {
        this.transitionTo('category-content', response);
      }).catch((err)=>{
        console.error(err);
      });
    },
    back() {
      history.back();
    }
  }
});
