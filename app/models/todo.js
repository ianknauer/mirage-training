import Model, { attr } from '@ember-data/model';

export default class TodoModel extends Model {
  @attr description;
  @attr title;

}
