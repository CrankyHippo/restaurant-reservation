exports.up = function (knex) {
    return knex.schema.alterTable("reservations", (table) => {
      table.string("first_name").notNullable().alter();
      table.string("last_name").notNullable().alter();
      table.string("mobile_number").notNullable().alter();
      table.date("reservation_date").notNullable().alter();
      table.time("reservation_time").notNullable().alter();
      table.integer("people").notNullable().alter();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable("reservations", (table) => {
      table.string("first_name").nullable().alter();
      table.string("last_name").nullable().alter();
      table.string("mobile_number").nullable().alter();
      table.string("reservation_date").nullable().alter();
      table.string("reservation_time").nullable().alter();
      table.integer("people").nullable().alter();
    });
  };