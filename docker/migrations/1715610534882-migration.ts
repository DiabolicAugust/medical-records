import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715610534882 implements MigrationInterface {
    name = 'Migration1715610534882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" RENAME COLUMN "lastName" TO "secondName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" RENAME COLUMN "secondName" TO "lastName"`);
    }

}
