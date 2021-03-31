

const CUSTOM_FUNCTIONS = `
ALTER TABLE NEW
    CHANGE updated_at
        updated_at TIMESTAMP NOT NULL
            DEFAULT CURRENT_TIMESTAMP
            ON UPDATE CURRENT_TIMESTAMP;
`

const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTION on_update_timestamp;
`

exports.up = async (knex) => knex.raw(CUSTOM_FUNCTIONS);
exports.down = async (knex) => knex.raw(DROP_CUSTOM_FUNCTIONS);
