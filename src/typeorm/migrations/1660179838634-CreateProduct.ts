import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProduct1660179838634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        //Vamos criar a tabela product
        await queryRunner.createTable(new Table({
            name: 'product',
            columns:[
                {
                    name:'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name:'name',
                    type:'varchar',
                },
                {
                    name: 'quantity',
                    type:  'int',
                },
                {
                    name: 'price',
                    type: 'decimal',
                    scale: 2
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'

                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
