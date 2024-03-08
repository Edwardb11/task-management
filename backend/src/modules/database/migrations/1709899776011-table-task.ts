import { MigrationInterface, QueryRunner } from 'typeorm';

export class TableTask1709899776011 implements MigrationInterface {
  name = 'TableTask1709899776011';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."task_estado_enum" AS ENUM('Pendiente', 'Completado')`,
    );
    await queryRunner.query(
      `CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying(100) NOT NULL, "descripcion" character varying NOT NULL, "estado" "public"."task_estado_enum" NOT NULL, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "task"`);
    await queryRunner.query(`DROP TYPE "public"."task_estado_enum"`);
  }
}
