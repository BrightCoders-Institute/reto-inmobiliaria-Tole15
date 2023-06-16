const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'path/to/tests',
  spec_files: ['**/*.[sS]pec.js'],
  helpers: [],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false,
});

jasmine.execute();
