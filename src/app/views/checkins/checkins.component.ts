import { CheckInService } from './../../services/checkIn.service';
import { AfterViewInit, Component, ViewChild, Injector } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  firstName: string;
  lastName: string;
  officeId: string;
  programId: string;
  type: string,
  cellNumber: string
}
/** Constants used to fill up our data base. */

const users = [
  {
    firstName: "string",
    lastName: "string",
    officeId: "string",
    programId: "string",
    type: "string",
    cellNumber: "dfsdfsd"
  }
]

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-checkins',
  templateUrl: './checkins.component.html',
  styleUrls: ['./checkins.component.scss']
})
export class CheckinsComponent {

  constructor(private injector: Injector) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    const checkInService = this.injector.get<CheckInService>(CheckInService);

    // checkInService.organizationCheckIns().subscribe(result => {
    //   this.checkInsArray = result
    //   console.log(this.checkInsArray)
    //   this.dataSource = new MatTableDataSource(this.checkInsArray);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // })

    checkInService.organizationCheckIns().subscribe(result => {
      this.checkInsArray = result
      // console.log(this.checkInsArray)
      console.log(this.checkInsArray)
      this.dataSource = new MatTableDataSource(this.checkInsArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

    // checkInService.organizationCheckIns2().subscribe(val => {
    //   console.log(val)
    // })
  }

  checkInsArray: any[] = [];
  checkInsArrTimeStamp: any[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // new Date(timestamp.seconds*1000)
    // checkInService.organizationCheckInsTimestamps().subscribe(result => {
    //   this.checkInsArrTimeStamp = result
    //   // let dateToTimestamp =  new Date(this.checkInsArray[0].timeStamp.seconds*1000)
    //   console.log(this.checkInsArrTimeStamp[0].timeStamp)

    //   checkInService.organizationByTimestamps().subscribe(result => {
    //     this.checkInsArray = result
    //     console.log(this.checkInsArray)
    //   })
    // })
  }

  displayedColumns: string[] = ['firstName', 'lastName', "type","cellNumber", 'officeId', 'programId'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
