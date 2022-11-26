import { Component, OnInit } from '@angular/core';
import { RsaService } from 'src/app/services/rsa.service';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {
  rsa: any[] = []; 

  constructor(private RSAService: RsaService) { 


  }

  ngOnInit(): void {}
}
