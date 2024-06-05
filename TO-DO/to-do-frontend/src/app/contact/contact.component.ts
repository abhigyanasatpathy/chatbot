import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });
  }
  

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.submitContact(this.contactForm.value)
        .subscribe(
          response => {
            console.log('Contact form submitted successfully:', response);
            // Optionally, reset the form after successful submission
            this.contactForm.reset();
          },
          error => {
            console.error('Error submitting contact form:', error);
            // Handle error
          }
        );
    } else {
      // Handle invalid form
    }
  }
}
