import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  gameData: any[] = [];
  FilterData: any[] = [];
  show: boolean = false;
  _enteredtext: string
  constructor(private _getService: GetDataService) { }

  ngOnInit() {
    this._getService.getGameData().subscribe((data: any) => {
      this.gameData = [...data.splice(1)];
      this.FilterData = [...this.gameData];
      this.show = true;
    })
  }
  set enteredtext(newValue: string) {
    this._enteredtext = newValue;

    this.FilterData = this._enteredtext ? this.filter(this._enteredtext) : this.gameData;
  }
  filter(filtertext: string) {
    // console.log(enteredtext);
    return (this.FilterData.filter((datas: any) =>
      (datas['title'].toLowerCase().indexOf(filtertext.toLowerCase()) !== -1)
    ));

  }


  ascending() {
    this.FilterData.sort((a, b) => {
      return a.score - b.score;
    })
  }
  descending() {
    this.FilterData.sort((a, b) => {
      return b.score - a.score;
    })
  }
}
