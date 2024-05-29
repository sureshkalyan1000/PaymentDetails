import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDetails } from './payment-details.model';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  url:string=environment.apiBaseUrl+'/Payment'
  list:PaymentDetails[]= []
  formData:PaymentDetails=new PaymentDetails()
  constructor(private http:HttpClient, private toastr: ToastrService) {

   }
   refreshList(){
      this.http.get(this.url).subscribe({
        next: res => {this.list=res as PaymentDetails[]},
        error: error => {console.log(error)}
      })
   }
   resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new PaymentDetails()
  }
   postpayment(){
    return this.http.post(this.url, this.formData)
   }
   putpayment(){
    return this.http.put(this.url+'/'+this.formData.paymentDetailId, this.formData)
   }
   DeletePaymentDet(id:number){
    this.http.delete(this.url+'/'+id).subscribe({
      next: res => {console.log(res)
        this.toastr.error('Deleted Sucessfully', 'Payment Details Register')
        //this.list=res as PaymentDetails[]
      },
      error: error => {console.log(error)}
    })
    
   }
}
