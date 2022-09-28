import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"


@Entity('product')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    nameClient: string
    @Column()
    document: string
    @Column()
    endereco: string
    @CreateDateColumn() 
    created_at: Date
    @UpdateDateColumn() 
    updated_at: Date

}

export default Product 