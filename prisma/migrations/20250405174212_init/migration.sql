/*
  Warnings:

  - The primary key for the `access_level` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `access_level` table. All the data in the column will be lost.
  - You are about to drop the column `accessLevelId` on the `collaborator` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `collaborator` table. All the data in the column will be lost.
  - You are about to drop the column `professionId` on the `collaborator` table. All the data in the column will be lost.
  - The primary key for the `department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `department` table. All the data in the column will be lost.
  - The primary key for the `profession` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `profession` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `profession` table. All the data in the column will be lost.
  - Added the required column `id_accessLevel` to the `access_level` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_accessLevel_collaborator` to the `collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_departament_collaborator` to the `collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_profession_collaborator` to the `collaborator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_departament` to the `department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_profession` to the `profession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `profession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `collaborator` DROP FOREIGN KEY `collaborator_accessLevelId_fkey`;

-- DropForeignKey
ALTER TABLE `collaborator` DROP FOREIGN KEY `collaborator_departmentId_fkey`;

-- DropForeignKey
ALTER TABLE `collaborator` DROP FOREIGN KEY `collaborator_professionId_fkey`;

-- DropIndex
DROP INDEX `collaborator_accessLevelId_fkey` ON `collaborator`;

-- DropIndex
DROP INDEX `collaborator_departmentId_fkey` ON `collaborator`;

-- DropIndex
DROP INDEX `collaborator_professionId_fkey` ON `collaborator`;

-- AlterTable
ALTER TABLE `access_level` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_accessLevel` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_accessLevel`);

-- AlterTable
ALTER TABLE `collaborator` DROP COLUMN `accessLevelId`,
    DROP COLUMN `departmentId`,
    DROP COLUMN `professionId`,
    ADD COLUMN `id_accessLevel_collaborator` INTEGER NOT NULL,
    ADD COLUMN `id_departament_collaborator` INTEGER NOT NULL,
    ADD COLUMN `id_profession_collaborator` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `department` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_departament` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_departament`);

-- AlterTable
ALTER TABLE `profession` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `title`,
    ADD COLUMN `id_profession` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_profession`);

-- AddForeignKey
ALTER TABLE `collaborator` ADD CONSTRAINT `collaborator_id_departament_collaborator_fkey` FOREIGN KEY (`id_departament_collaborator`) REFERENCES `department`(`id_departament`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collaborator` ADD CONSTRAINT `collaborator_id_profession_collaborator_fkey` FOREIGN KEY (`id_profession_collaborator`) REFERENCES `profession`(`id_profession`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `collaborator` ADD CONSTRAINT `collaborator_id_accessLevel_collaborator_fkey` FOREIGN KEY (`id_accessLevel_collaborator`) REFERENCES `access_level`(`id_accessLevel`) ON DELETE RESTRICT ON UPDATE CASCADE;
