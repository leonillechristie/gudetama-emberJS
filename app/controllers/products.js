import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByTitle(param) {
      if (param !== '') {
        return this.store
          .query('product', { title: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.store
          .findAll('product').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
