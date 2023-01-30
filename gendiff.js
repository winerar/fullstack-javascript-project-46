const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  //.option('-h, --help', 'display help for command')
  .version('0.0.1', '-V, --version', 'output the version number');

program.parse();


const options = program.opts();
if (options.help) console.log(options);
console.log(options.description);
