import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1715949022669 implements MigrationInterface {
    name = 'Migration1715949022669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."person_sex_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "address" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "sex" "public"."person_sex_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "type" character varying NOT NULL, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7968479009dcf6ffc61af19ae2" ON "person" ("type") `);
        await queryRunner.query(`CREATE TYPE "public"."patient_sex_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`CREATE TABLE "patient" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "address" character varying NOT NULL, "dateOfBirth" TIMESTAMP NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "sex" "public"."patient_sex_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "CHK_ea210a4689b9524c764a0d6294" CHECK ("sex" IN ('male', 'female', 'other')), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "secondName"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "contacts"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "dateOfBirth" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."doctor_sex_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "sex" "public"."doctor_sex_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "sex"`);
        await queryRunner.query(`DROP TYPE "public"."doctor_sex_enum"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "dateOfBirth"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "doctor" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "contacts" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "doctor" ADD "secondName" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "patient"`);
        await queryRunner.query(`DROP TYPE "public"."patient_sex_enum"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7968479009dcf6ffc61af19ae2"`);
        await queryRunner.query(`DROP TABLE "person"`);
        await queryRunner.query(`DROP TYPE "public"."person_sex_enum"`);
    }

}
