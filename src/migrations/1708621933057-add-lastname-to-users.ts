import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLastnameToUsers1708621933057 implements MigrationInterface {
    name = 'AddLastnameToUsers1708621933057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "lastname" character varying(255) NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastname"`);
    }

}
