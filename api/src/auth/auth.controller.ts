<<<<<<< HEAD
//auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from 'src/DTOs/login.dto';
import * as bcrypt from 'bcrypt';
=======
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from '../DTOs/login.dto';
import { CreateUserDto } from 'src/DTOs/create-user.dto';
>>>>>>> 1bb27441 (2/5 arreglos)


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

<<<<<<< HEAD
    //login con credenciales de usuario
    @Post('/login')
    async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.authService.findByUsername(loginDto.username);

      if (!user) {
        throw new UnauthorizedException('Usuario incorrecto');
      }

      const passwordMatch = await bcrypt.compare(loginDto.password, loginDto.password);

      if (!passwordMatch) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }

      return { success: true, user: { username: user.username } };
    } catch (error) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.authService.findByUsername(username);
      if (user && user.password === password) {
          return user;
    }
          return null;
    }
=======
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const token = await this.authService.login(loginDto);

    if (!token) {
      throw new UnauthorizedException("Las credencialesintroducidas son incorrectas");
    }

    return {
      success: true,
      token: token,
    };
  }  
 
  @Post("/register")
  async createUser(@Body() createUserDto : CreateUserDto){
    try {
      const newUser =await this.authService.createUser(createUserDto)
      return {
        message : "El regisro fue exitoso, Usuario Creado",
        success : true,
        user : newUser,
      };
    } catch (error) {
      // Manejar el error ocurrido durante la creación del usuario
      console.error('Error al crear usuario:', error);
      
      // Devolvemos una respuesta indicando el error
      return {
        message: 'Hubo un error al crear el usuario. Por favor, inténtalo de nuevo.',
        success: false,
        error: error.message, // Podemos proporcionar más detalles del error si es necesario
      };
    }
  }

  @Post("verificar-token")
  async verificarToken(@Body() { token }: { token: string }) {
    try {
      const decoded = await this.authService.verificarToken(token);
      return { success: true, user: decoded };
    } catch (error) {
      throw new UnauthorizedException("Token inválido");
    }
  }
>>>>>>> 1bb27441 (2/5 arreglos)

}