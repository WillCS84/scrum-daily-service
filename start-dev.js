const { exec } = require('child_process');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const isWindows = os.platform() === 'win32';
const script = isWindows ? 'docker-up.sh' : 'bash ./docker-up.sh';

console.log(chalk.cyan('🌍 Detectando sistema operacional...'));
console.log(chalk.yellow(`📦 Sistema: ${os.platform()}`));
console.log(chalk.magenta(`🚀 Executando: ${script}`));

exec(script, (error, stdout, stderr) => {
  if (error) {
    console.error(chalk.red(`❌ Erro ao executar o script: ${error.message}`));
    return;
  }

  if (stderr) {
    console.error(chalk.red(`⚠️ STDERR: ${stderr}`));
  }

  console.log(chalk.green(`✅ Script executado com sucesso:`));
  console.log(stdout);
});
