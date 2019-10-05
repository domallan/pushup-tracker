const NodeCouchDb = require('node-couchdb');

// node-couchdb instance with Memcached
const MemcacheNode = require('node-couchdb-plugin-memcached');
const couch = new NodeCouchDb({
    // cache: new MemcacheNode,
    auth: {
      user: 'dom',
      password: 'rewind'
    }
});

module.exports = couch;
