/*
  Warnings:

  - A unique constraint covering the columns `[resetToken]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `resetToken` VARCHAR(191) NULL,
    ADD COLUMN `resetTokenExpires` DATETIME(3) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_resetToken_key` ON `user`(`resetToken`);
