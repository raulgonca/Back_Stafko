import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  createProject(@Body() { nameproject, description, fechaInicio, fechaFinalizacion }: { nameproject: string; description: string ,fechaInicio : Date, fechaFinalizacion: Date } ) {
    return this.projectService.createProject(nameproject, description, fechaInicio, fechaFinalizacion);
  }

  @Get()
  getAllProject() {
    return this.projectService.getAllProject();
  }

  @Get(':id')
  deleteRepo(@Param('id') id: number) {
    return this.projectService.deleteRepo(id);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() { nameproject, description, fechaInicio, fechaFinalizacion } : { nameproject: string, description: string , fechaInicio : Date , fechaFinalizacion: Date } ) {
    return this.projectService.updateProject(+id, nameproject, description, fechaInicio, fechaFinalizacion);
  }

  
}


