-- CreateTable
CREATE TABLE `collaborator` (
    `id_colaborador` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `accessToken` VARCHAR(191) NULL,
    `accessLevel` ENUM('ADMIN', 'MANAGER', 'USER') NOT NULL DEFAULT 'USER',
    `departmentId` INTEGER NOT NULL,
    `professionId` INTEGER NOT NULL,
    `accessLevelId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `collaborator_email_key`(`email`),
    PRIMARY KEY (`id_colaborador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `department` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `access_level` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `levelName` ENUM('ADMIN', 'MANAGER', 'USER') NOT NULL,

    UNIQUE INDEX `access_level_levelName_key`(`levelName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `collaborator` ADD CONSTRAINT `collaborator_departmentId_fkey` FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collaborator` ADD CONSTRAINT `collaborator_professionId_fkey` FOREIGN KEY (`professionId`) REFERENCES `profession`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collaborator` ADD CONSTRAINT `collaborator_accessLevelId_fkey` FOREIGN KEY (`accessLevelId`) REFERENCES `access_level`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
