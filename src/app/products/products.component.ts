import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './products.component.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) {}

  @Input() search: string;
  public productsList: any = [];

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnChanges():void {
    this.getProducts();
  }

  private getProducts(): void{
    this.productsService.getProducts(this.search).subscribe((data)=>{
      this.productsList = data;
    });
  }
}
