import { TaskStatus } from 'src/modules/common/status/status.enum';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  titulo: string;

  @Column()
  descripcion: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
  })
  estado: string;
}
