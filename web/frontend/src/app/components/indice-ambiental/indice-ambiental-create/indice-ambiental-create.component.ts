import { Component, OnInit } from '@angular/core';
import { AbstractControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IndiceAmbientalService } from "../../../services/indice-ambiental.service";
import { IndiceAmbientalDto } from "../../../models/indiceAmbientalDto";

@Component({
  selector: 'app-indice-ambiental-create',
  templateUrl: './indice-ambiental-create.component.html',
  styleUrls: ['./indice-ambiental-create.component.css'],
  providers: [IndiceAmbientalService]
})
export class IndiceAmbientalCreateComponent implements OnInit {
  form: any;
  submitted = false;

  constructor(private indiceAmbientalService: IndiceAmbientalService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      humedad: ['', Validators.required],
      nivel: ['', Validators.required],
      temperatura: ['', Validators.required]
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.value.humedad==0||this.form.value.nivel==0||this.form.value.temperatura==0) {
      return ;
    }
    if (this.form.invalid) {
      return;
    }
    this.indiceAmbientalService.postIndiceAmbiental(this.form.value).subscribe((res) => {
      this.submitted = false;
      this.form.reset();
    });
  }
}
