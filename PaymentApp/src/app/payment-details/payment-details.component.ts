import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details.service';
import { PaymentDetails } from '../shared/payment-details.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailsService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }
  Delete(id:number){
    if(confirm("Are you sure to Delete this record?")){
      this.service.DeletePaymentDet(id)
    }
  }
  populate(selected:PaymentDetails){
    this.service.formData=Object.assign({},selected); 
  }

}
