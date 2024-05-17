import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715952030328 implements MigrationInterface {
    name = 'Migration1715952030328'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "patient" ALTER COLUMN "email" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patient" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "person" ALTER COLUMN "email" SET NOT NULL`);
    }

}
