const chalk = require('chalk');
const figlet = require('figlet');

figlet('cz - vinyl', (err, figletText) => {
	if (err) {
		return;
	}

	console.log(chalk.bold(figletText));

	console.log(chalk.bold.blue('Welcome to cz-vinyl package!!'));

	console.log('šāØšāØšāØšāØšāØšāØšāØšāØ\n');

	console.log(chalk.bold('Please follow these rules:'));

	console.log(
		chalk.bold.blue('- š¦ļø Use "git cmt" instead of "git commit" in order to commit your changes'),
	);
	console.log(chalk.bold.blue('- š Follow the code conventions (our linters will enforce you..)'));
	console.log(chalk.bold.blue('- ā Add unit tests for your code if needed'));
	console.log(chalk.bold.blue('- š Make sure GitHub actions are passed before asking for PR'));
	console.log(chalk.bold.blue('- š Document/Modify your new feature/fix in the README.md file'));

	console.log(
		chalk.bold(
			`\nš„š„š„ For any help or questions, you can open an issue or contact ${chalk.italic.gray(
				'dev@exlint.io',
			)} š„š„š„\n`,
		),
	);
});
