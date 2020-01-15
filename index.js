const util = require('util');
const mysql = require('mysql');


module.exports = (config) => {
  const conn = mysql.createConnection(config);

  return {
    query: function(sql, args) {
      return util.promisify(conn.query)
                .call(conn, sql, args);
    },
    close: function() {
      returl util.promisify(conn.end).call(conn);
    },
    beginTransaction: function() {
      return util.promisify(conn.beginTransaction)
                .call(conn);
    },
    commit: function() {
      return util.promisify(conn.commit)
                .call(conn);
    },
    rollback: function() {
      return util.promisify(conn.rollback)
                .call(conn);
    }
  }
};
