import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1708448471555 implements MigrationInterface {
    name = 'InitDatabase1708448471555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."dogs_gender_enum" AS ENUM('male', 'female', 'other')`);
        await queryRunner.query(`CREATE TABLE "dogs" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "race" character varying NOT NULL, "age" integer NOT NULL, "weight" numeric NOT NULL, "gender" "public"."dogs_gender_enum" NOT NULL DEFAULT 'other', CONSTRAINT "PK_c0911b1d44db6cdd303c6d6afc9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "email" character varying NOT NULL, "address" character varying, "roleId" uuid, "dogId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_dff4ac74c70a88b244ff161e1c1" FOREIGN KEY ("dogId") REFERENCES "dogs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_dff4ac74c70a88b244ff161e1c1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "dogs"`);
        await queryRunner.query(`DROP TYPE "public"."dogs_gender_enum"`);
        await queryRunner.query(`DROP TABLE "role"`);
    }

}
