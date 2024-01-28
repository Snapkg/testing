const Ajv = require('ajv');
const fs = require('fs');

const manifest_schema = require('./manifest_schema.json');
const jsonData = JSON.parse(fs.readFileSync('../manifest.json'));

const ajv = new Ajv({allErrors: true});
const validate = ajv.compile(manifest_schema);

if(validate(jsonData)) {
  console.log('Valid JSON');
} else {
  console.log('Invalid JSON: ', validate.errors);
}

console.log('done_test');