import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class ClassSchedule1596565458124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'class_schedule',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'week_day',
            type: 'integer',
          },
          {
            name: 'from',
            type: 'integer',
          },
          {
            name: 'to',
            type: 'integer',
          },
          {
            name: 'class_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'ClassSchedule',
            referencedTableName: 'classes',
            referencedColumnNames: ['id'],
            columnNames: ['class_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('class_schedule');
  }
}

export default ClassSchedule1596565458124;
