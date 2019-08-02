import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  /*   products: any = [];
  private api = " http://localhost:3000/products";
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:3000/products").subscribe(
      res => {
        console.log(res);
        this.products = res;
      },
      err => {
        console.log(err);
      }
    );
  }
*/

  products: any = [];
  private api = " http://localhost:3000/products";
  constructor(private http: HttpClient) {}

  id: number;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get("http://localhost:3000/products").subscribe(
      data => {
        console.log(data);
        this.products = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteProduct(id: number) {
    const url = `${this.api}/${id}`;
    if (confirm("are you sure")) {
      this.http.delete(url).subscribe(
        data => {
          console.log(data);
          this.fetchData();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
