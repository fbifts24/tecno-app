import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  miFormulario: FormGroup

  constructor(private _fb: FormBuilder) {
    this.miFormulario = _fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      tipoDni: ['', [Validators.required]],
      dni: ['', [Validators.required, Validators.minLength(7)]],
    })
  }

  campoInvalido(control: string): boolean {
    const CAMPO = this.miFormulario.get(control)

    if (!CAMPO) {
      return false
    }

    return CAMPO.invalid && CAMPO.touched
  }

  campoValido(control: string): boolean {
    const CAMPO = this.miFormulario.get(control)

    if (!CAMPO) {
      return false
    }

    return CAMPO.valid && CAMPO.touched
  }

  mostrarErrores(control: string, validator: string) {
    const CAMPO = this.miFormulario.get(control)

    return CAMPO?.hasError(validator) && CAMPO?.touched

  }

  get etiquetaDocumento() {
    const TIPO = this.miFormulario.get('tipoDni')?.value

    return TIPO ? `Numero de ${TIPO}` : ``
  }

  enviar() {
    if (this.miFormulario.invalid) {

      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value)
  }
}
