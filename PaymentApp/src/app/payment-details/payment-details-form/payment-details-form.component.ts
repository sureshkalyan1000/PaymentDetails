import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetails } from 'src/app/shared/payment-details.model';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styleUrls: ['./payment-details-form.component.css']
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service:PaymentDetailsService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  Onsubmit(form:NgForm){
    if(this.service.formData.paymentDetailId==0){
        this.postf(form);
    }else{
        this.putf(form);
    }
  }
  postf(form:NgForm){
    this.service.postpayment().subscribe({
      next: res=> {this.service.list=res as PaymentDetails[]
        this.service.refreshList()
        this.service.resetForm(form)
        this.toastr.success('Inserted Sucessfully', 'Payment Details Register')
      },
      error: res=> {console.log(res)}
    })
  }
  putf(form:NgForm){
    this.service.putpayment().subscribe({
      next: res=> {this.service.list=res as PaymentDetails[]
        this.service.refreshList()
        this.service.resetForm(form)
        this.toastr.info('Inserted Sucessfully', 'Payment Details Updated')
      },
      error: res=> {console.log(res)}
    })
  }

}
