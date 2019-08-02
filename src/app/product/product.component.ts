import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(private http: HttpClient) {}
  products: any = {};
  addNewProduct(product) {
    this.products = {
      name: product.name,
      color: product.color
    };
    this.http.post("http://localhost:3000/products", this.products).subscribe(
      (data: any) => {
        console.log(data);
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );
    var message = new alert("new product has been added");
  }

  ngOnInit() {}
}
