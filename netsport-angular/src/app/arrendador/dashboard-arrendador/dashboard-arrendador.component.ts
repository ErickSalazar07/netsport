import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-arrendador',
  templateUrl: './dashboard-arrendador.component.html',
  styleUrls: ['./dashboard-arrendador.component.css']
})
export class DashboardArrendadorComponent {

  constructor(
    private route:ActivatedRoute
  ) { }

  id:number = -1;

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  }

}
