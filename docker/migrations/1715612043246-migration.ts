import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715612043246 implements MigrationInterface {
    name = 'Migration1715612043246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialization" ADD CONSTRAINT "UQ_eacccf61742e92e73e6781b68fc" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specialization" DROP CONSTRAINT "UQ_eacccf61742e92e73e6781b68fc"`);
    }

}
