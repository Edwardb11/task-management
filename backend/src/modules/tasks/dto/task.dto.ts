import { IsNotEmpty, IsEnum, Length } from 'class-validator';
import { TaskStatus } from 'src/modules/common/status/status.enum';

export class CreateOrUpdateTaskDto {
  @IsNotEmpty()
  @Length(1, 100)
  titulo: string;

  @IsNotEmpty()
  @Length(1, 255)
  descripcion: string;

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  estado: TaskStatus;
}
