
exports.up = function (knex) {
    return knex.schema.table("reservations", (table) => {
      table.string("first_name");
      table.string("last_name");
      table.string("mobile_number");
      table.string("reservation_date");
      table.string("reservation_time");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("reservations", (table) => {
      table.dropColumn("first_name");
      table.dropColumn("last_name");
      table.dropColumn("mobile_number");
      table.dropColumn("reservation_date");
      table.dropColumn("reservation_time");
    });
  };