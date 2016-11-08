import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thing-details/done-button', 'Integration | Component | thing details/done button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thing-details/done-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thing-details/done-button}}
      template block text
    {{/thing-details/done-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
