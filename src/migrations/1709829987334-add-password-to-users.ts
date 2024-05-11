import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordToUsers1709829987334 implements MigrationInterface {
    name = 'AddPasswordToUsers1709829987334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
