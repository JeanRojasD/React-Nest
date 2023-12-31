import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailUnicoValidator } from "./validacao/email-unico.validator";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Module({
    imports: [ TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioRepository, EmailUnicoValidator]    
})
export class UsuarioModule{}