// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent // Aquí se declaran todos los componentes de tu aplicación
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Para las peticiones HTTP
    FormsModule // Para los formularios
  ],
  providers: [
    EmployeeService // Proveedor del servicio de empleados
  ],
  bootstrap: [AppComponent] // Componente principal para bootstrap
})
export class AppModule { }
