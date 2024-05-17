import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715951192274 implements MigrationInterface {
    name = 'Migration1715951192274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patient" ADD "doctorId" integer`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "CHK_0751b89f3b916db34aa234575f" CHECK ("sex" IN ('male', 'female', 'other'))`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD CONSTRAINT "CHK_f981cc385c580bfdc611016c65" CHECK ("sex" IN ('male', 'female', 'other'))`);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_3a86118a85d8fed2f3bf0181264" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_3a86118a85d8fed2f3bf0181264"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP CONSTRAINT "CHK_f981cc385c580bfdc611016c65"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "CHK_0751b89f3b916db34aa234575f"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP COLUMN "doctorId"`);
    }

}
