import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HomeService } from 'src/app/core/services/home.service';
import { Country, NameDetail } from 'src/app/shared/models/country.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Country[]             // list of country data
  displayData: Country[]      // list of country data
  searchValue = ''            // string of country
  loading = false             // loadind boolean, loading = true => is loading
                              //                  loading = false => loaded

  constructor(
    private homeService: HomeService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit(): void {
    // set loading variable to be true for wait to get data 
    this.loading = true
    // get data from api
    this.homeService.getCountry().subscribe((res) => {
      this.data = res
      this.displayData = res
      // call sort country name function
      this.sortCountry(this.displayData)
    }, ({ error }) => {
      // display error message when error for api
      this.notification.error('error', error.message)
    })
  }

  search(): void {
    // data variable store list of country that match with searchValue
    const data = this.data.filter((item: { name: NameDetail; }) =>
      // call filter function to filter country that match with searchValue
      this.filterFunc(item),
    )
    // call sortCountry function to sort the data variable(list)
    this.sortCountry(data)
  }

  // item: country name of data list
  filterFunc = (item: { name: NameDetail }) => {
    // set loading variable to be true for wait to get data 
    this.loading = true
    // store search value with lower case
    const sValue = this.searchValue.toLowerCase()
    // store country name of data with lower case
    const store = item.name.common.toLowerCase()
    // return true when country name of data match with searchValue(sValue)
    return store.indexOf(sValue) !== -1
  }

  onChange(e): void {
    this.search()
  }

  sortCountry(data: Country[]) {
    // sort data by alphabet of country name
    this.displayData = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
    // set loading variable to be false when the data has sorted
    this.loading = false
  }
}
