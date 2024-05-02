import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Project } from '../Projects/project.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

<<<<<<< HEAD
  @Column('jsonb', { nullable: true })
  password : string;

  @OneToMany(() => Project, project => project.owner)
  ownedProjects: Project[];

  @ManyToMany(() => Project, project => project.collaborators)
  projects: Project[];
}
=======
  @Column('jsonb', { nullable : true })
  password : string;

  @Column('jsonb', { nullable : true } )
  gmail : string;
   
  @OneToMany(() => Project, project => project.owner)
  ownedProjects: Project[];
  
  @ManyToMany(() => Project, project => project.collaborators)
  projects: Project[];
}
>>>>>>> 1bb27441 (2/5 arreglos)
