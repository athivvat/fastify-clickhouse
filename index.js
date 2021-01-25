const fastifyPlugin = require("fastify-plugin");
const { ClickHouse } = require("clickhouse");

function clickhouseConnector(fastify, options, done) {
  const {
    url,
    port,
    debug,
    basicAuth: { username, password },
    isUseGzip,
    format,
    config: { database },
  } = options;

  const clickhouse = new ClickHouse({
    url,
    port,
    debug,
    basicAuth: {
      username,
      password,
    },
    isUseGzip,
    format,
    config: {
      database,
    },
  });

  fastify.decorate("clickhouse", clickhouse);

  done();
}

module.exports = fastifyPlugin(clickhouseConnector);
