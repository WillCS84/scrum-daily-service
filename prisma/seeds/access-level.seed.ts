import { PrismaClient, AccessLevelEnum } from '@prisma/client';

const prisma = new PrismaClient();

async function seedAccessLevels() {
  const levels = [
    { levelName: AccessLevelEnum.ADMIN, label: 'Administrador' },
    { levelName: AccessLevelEnum.MANAGER, label: 'Gerente' },
    { levelName: AccessLevelEnum.USER, label: 'Usuário Padrão' },
  ];

  for (const level of levels) {
    const exists = await prisma.accessLevel.findUnique({
      where: { levelName: level.levelName },
    });

    if (!exists) {
      // Criar o novo nível de acesso
      await prisma.accessLevel.create({
        data: {
          levelName: level.levelName,
          label: level.label,
        },
      });
      console.log(`✅ ${level.levelName} inserido com sucesso.`);
    } else {
      console.log(`⚡ ${level.levelName} já existe.`);
    }
  }

  console.log('✅ Todos os Access Levels foram processados.');
}

async function main() {
  await seedAccessLevels();
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Erro ao rodar seed:', e);
  process.exit(1);
});
