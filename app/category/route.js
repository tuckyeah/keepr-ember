import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('category', params.category_id);
  },

  actions: {
    edit (category) {
      this.transitionTo('category.edit', category);
    },
    createThing (newThing) {
      let thing = this.get('store').createRecord('thing', newThing);
      return thing.save()
      .then((response)=> {
        console.log(response);
        let data = {
          category_content: {
            thing_id: response.id,
            category_id: response.category.id
          }
        };
        console.log(data);
        return data;
      }).then((data)=> {
        return this.get('auth').createContent(data);
      }).then((data)=> {
        console.log(data);
        this.refresh();
      }).catch((err)=>{
        console.error(err);
      });

      //
      // })
      //   return this.save()
      //   then((response)=> {
      //
      //   })
      //   this.refresh();
      // });
    },
    back() {
      history.back();
    }
  }
});
