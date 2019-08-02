import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent implements OnInit {
  products: any = [];
  id: number;
  data: object = {};
  productobj: object = {};

  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  updateProduct(product) {
    this.productobj = {
      name: product.name,
      color: product.color
    };

    const url = `${"http://localhost:3000/products"}/${this.id}`;
    this.http
      .put(url, JSON.stringify(this.productobj), { headers: this.headers })
      .toPromise()
      .then(() => {
        this.router.navigate(["/"]);
      });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    this.http.get("http://localhost:3000/products").subscribe(
      data => {
        console.log(data);
        this.products = data;
        for (var i = 0; i < this.products.length; i++) {
          if (parseInt(this.products[i].id) === this.id) {
            this.data = this.products[i];
            break;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
