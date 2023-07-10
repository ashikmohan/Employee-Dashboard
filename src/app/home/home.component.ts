import { Component ,OnInit} from '@angular/core';
import { FetchingService } from '../fetching.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
details:any;
  constructor(private service:FetchingService){ }
  ngOnInit(): void {
    this.service.fetchdata().subscribe((data=>{
      this.details=data;
      console.log(this.details)
    }))
  }

}
