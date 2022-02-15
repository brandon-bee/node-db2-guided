
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { fruit_name: 'apple', avg_weight: 10.5, delicious: true, fruit_color: 'red' },
        { fruit_name: 'orange', avg_weight: 8.5, delicious: false, fruit_color: 'orange' },
        { fruit_name: 'strawberry', avg_weight: 3, delicious: true, fruit_color: 'red' }
      ]);
    });
};
