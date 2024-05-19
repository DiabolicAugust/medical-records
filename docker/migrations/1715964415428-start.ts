import { MigrationInterface, QueryRunner } from "typeorm";

export class Start1715964415428 implements MigrationInterface {
    name = 'Start1715964415428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialization" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_eacccf61742e92e73e6781b68fc" UNIQUE ("name"), CONSTRAINT "PK_904dfcbdb57f56f5b57b9c09cc5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."doctor_sex_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`CREATE TABLE "doctor" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "address" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying, "sex" "public"."doctor_sex_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "CHK_f981cc385c580bfdc611016c65" CHECK ("sex" IN ('male', 'female', 'other')), CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."patient_sex_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "address" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying, "sex" "public"."patient_sex_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "doctorId" integer, CONSTRAINT "CHK_ea210a4689b9524c764a0d6294" CHECK ("sex" IN ('male', 'female', 'other')), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctor_specialization" ("doctor_id" integer NOT NULL, "specialization_id" integer NOT NULL, CONSTRAINT "PK_353d3029d44d2e759365dd2e234" PRIMARY KEY ("doctor_id", "specialization_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_360a602b786e8a2faa076437eb" ON "doctor_specialization" ("doctor_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_453f1d7af47289d99b263605ae" ON "doctor_specialization" ("specialization_id") `);
        await queryRunner.query(`ALTER TABLE "patient" ADD CONSTRAINT "FK_3a86118a85d8fed2f3bf0181264" FOREIGN KEY ("doctorId") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "doctor_specialization" ADD CONSTRAINT "FK_360a602b786e8a2faa076437eb2" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "doctor_specialization" ADD CONSTRAINT "FK_453f1d7af47289d99b263605ae2" FOREIGN KEY ("specialization_id") REFERENCES "specialization"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor_specialization" DROP CONSTRAINT "FK_453f1d7af47289d99b263605ae2"`);
        await queryRunner.query(`ALTER TABLE "doctor_specialization" DROP CONSTRAINT "FK_360a602b786e8a2faa076437eb2"`);
        await queryRunner.query(`ALTER TABLE "patient" DROP CONSTRAINT "FK_3a86118a85d8fed2f3bf0181264"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_453f1d7af47289d99b263605ae"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_360a602b786e8a2faa076437eb"`);
        await queryRunner.query(`DROP TABLE "doctor_specialization"`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TYPE "public"."patient_sex_enum"`);
        await queryRunner.query(`DROP TABLE "doctor"`);
        await queryRunner.query(`DROP TYPE "public"."doctor_sex_enum"`);
        await queryRunner.query(`DROP TABLE "specialization"`);
    }

}
