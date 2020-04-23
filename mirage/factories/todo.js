import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Todo ${i}`
  },
  
  description() {
    return 'the description for this todo!'
  }
});
