import waitPort from 'wait-port';
import * as dotenv from 'dotenv';

dotenv.config();

const url = new URL(process.env.DATABASE_URL || '');
const host = url.hostname;
const port = Number(url.port || 3306);

(async () => {
  const open = await waitPort({ host, port, timeout: 30000 });
  if (open) {
    console.log(`✅ Banco disponível em ${host}:${port}`);
    process.exit(0);
  } else {
    console.error(`❌ Timeout ao esperar pelo banco em ${host}:${port}`);
    process.exit(1);
  }
})();
