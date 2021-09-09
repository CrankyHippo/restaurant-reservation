exports.up = function (knex) {
    return knex.schema.table("reservations", (table) => {
      table.integer("people");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("reservations", (table) => {
      table.dropColumn("people");
    });
  };