const { spawn } = require('child_process');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const isWindows = os.platform() === 'win32';

const script = isWindows ? 'docker-up.sh' : 'bash ./docker-up.sh';

console.log(chalk.cyan('🌍 Detectando sistema operacional...'));
console.log(chalk.yellow(`📦 Sistema: ${os.platform()}`));
console.log(chalk.magenta(`🚀 Executando: ${script}`));

const child = spawn(script, { shell: true });

child.stdout.on('data', (data) => {
  console.log(chalk.green(data.toString().trim()));
});

child.stderr.on('data', (data) => {
  console.error(chalk.red(data.toString().trim()));
});

child.on('close', (code) => {
  if (code === 0) {
    console.log(
      chalk.blue(`✅ Script finalizado com sucesso (exit code ${code})`),
    );
  } else {
    console.error(chalk.red(`❌ Script terminou com erro (exit code ${code})`));
  }
});

child.on('error', (err) => {
  console.error(chalk.red(`❌ Falha ao iniciar o processo: ${err.message}`));
});
