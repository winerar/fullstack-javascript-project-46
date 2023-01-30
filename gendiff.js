const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('filepath2')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format');

program.parse();


const options = program.opts();
if (options.help) console.log(options);
console.log(options.description);
