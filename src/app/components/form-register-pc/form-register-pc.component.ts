import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { jsPDF } from "jspdf";
import { NgZorroModule } from '../../ng-zorro/ng-zorro.module';


@Component({
  standalone: true,
  selector: 'app-form-register-pc',
  templateUrl: './form-register-pc.component.html',
  styleUrls: ['./form-register-pc.component.css'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class FormRegisterPcComponent implements OnInit {

  public formulario!: FormGroup;

  public fb = inject(FormBuilder);

  constructor() {}

  ngOnInit(): void {
    this.addDevice();

    this.formulario = this.fb.group({
      id: ['Eyder Suarez',],
      date: ['100',],
      ticketNumber: ['902',],
      typeService: ['902',],
      technicalService: ['El mejor',],
      operation: ['Sin imagen',],
      user: ['Sistemas',],
      status: ['Pendiente',],
      host: ['Programador',],
      deviceType: this.fb.array([]), // Cambiado a FormArray
      warehouseManager: [''],
      CCwarehouseManager: [''],
      técnico: [''],
      CCtecnico: [''],
    });
  }

  get deviceType(): FormArray {
    return this.formulario.get('deviceType') as FormArray;
  }

  addDevice(): void {
    const deviceGroup = this.fb.group({
      type: ['', Validators.required], // tipo de dispositivo
      deviceName: ['', Validators.required], // nombre del dispositivo
      brand: [''], // marca del dispositivo
      model: [''], // modelo del dispositivo
      serialNumber: [''], // número de serie
      plate: [''], // placa del dispositivo
      observe: [''], // observaciones
    });
    this.deviceType.push(deviceGroup);
  }

  removeDevice(index: number): void {
    this.deviceType.removeAt(index);
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      // Aquí puedes manejar el envío del formulario
    }
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
