import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from "jspdf";


@Component({
  standalone: true,
  selector: 'app-form-register-pc',
  templateUrl: './form-register-pc.component.html',
  styleUrls: ['./form-register-pc.component.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormRegisterPcComponent implements OnInit {

  public formulario!: FormGroup;

  public fb = inject(FormBuilder);

  constructor() {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['Eyder Suarez',],
      cantidad: ['100',],
      precio: ['902',],
      descripcion: ['El mejor',],
      imagen: ['Sin imagen',],
      categoria: ['Programador',],
      subcategoria: ['Sistemas',],
    });
  }

  descargarPDF() {
    const doc = new jsPDF();

    // Agregar los datos del formulario al PDF
    doc.text(`Nombre: ${this.formulario.value.nombre}`, 10, 10);
    doc.text(`Cantidad: ${this.formulario.value.cantidad}`, 10, 20);
    doc.text(`Precio: ${this.formulario.value.precio}`, 10, 30);
    doc.text(`Descripción: ${this.formulario.value.descripcion}`, 10, 40);
    doc.text(`Imagen: ${this.formulario.value.imagen}`, 10, 50);
    doc.text(`Categoría: ${this.formulario.value.categoria}`, 10, 60);
    doc.text(`Subcategoría: ${this.formulario.value.subcategoria}`, 10, 70);

    // Guardar el PDF
    doc.save('formulario.pdf');

    // Resetear el formulario
    this.formulario.reset();
  }

}
