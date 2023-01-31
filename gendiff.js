const { program } = require('commander');
const fs = require('fs');
const path = require('path');

const readFile = (filepath) => {
  const text = fs.readFileSync(filepath,'utf8')
  return text;
};

const getJsonFromFile = (filepath) => {
  return JSON.parse(readFile(filepath));
};

const gendiff = async (filepath1, filepath2) => {
  console.log(getJsonFromFile(filepath1));
  console.log(getJsonFromFile(filepath2));
};

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('filepath2')
  .action((filepath1, filepath2) => gendiff(filepath1, filepath2))
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format');

program.parse();
