import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { DisplayCodeComponent } from '../display-code/display-code.component';

@Component({
  selector: 'app-my-programs',
  templateUrl: './my-programs.component.html',
  styleUrls: ['./my-programs.component.scss']
})
export class MyProgramsComponent implements OnInit {
  arrList = '-6,-3,0,1,3,6,2,5';
  arrayLists: number[] | undefined;

  rvrArray = "1,2,3,4,5,6";
  rvrArrayList: any;

  smallestPosNum: any;
  givenNum = 10;
  smallestNum: any;
  showMylogic: any;

  consArray = '10,2,100,1,4,5,3,200';
  consArrayList: any;
  arrayLength: any;

  dupliArray = '1,1,2,3,4,5,3,6,7,5,8,9';
  dupliArrayList: any;
  duplicateElements: any;
  seconds: number = 0;
  minutes: number = 0;
  interval!: NodeJS.Timeout;
  count: number =10;
  constructor(
    private modal: MatDialog
  ) { }


  ngOnInit(): void {
 new Promise<void>((resolve) => resolve()).then(( )=> { throw Error('Error')}).catch(err=> 'Catch').catch(()=> console.log('helllooo'))


 const exmp = new Subject<string>();
exmp.next('hi');
exmp.subscribe(val => console.log(val));

    let sub = new Subject();
    sub.next(1);
    sub.next(2);
    sub.next(3);

    sub.subscribe(val=> console.log('Subject: ', val));
    sub.next(4);
    sub.next(5);

    let behavSub = new BehaviorSubject(0);
    behavSub.next(1);
    behavSub.next(2);
    behavSub.next(3);

    behavSub.subscribe(val=> console.log('Behavioural Subject: ', val));
    behavSub.next(4);
    behavSub.next(5);

    let replaySub = new ReplaySubject();
    replaySub.next(1);
    replaySub.next(2);
    replaySub.next(3);

    replaySub.subscribe(val=> console.log('Replay Subject: ', val));
    replaySub.next(4);
    replaySub.next(5);

    let asychSub = new AsyncSubject();
    asychSub.next(1);
    asychSub.next(2);
    asychSub.next(3);

    asychSub.subscribe(val=> console.log('Asynch Subject: ', val));
    // asychSub.next(4);
    // asychSub.next(5);
    //longest palindrome
    let s = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

  let  substr='';
  let  result = '';
    if(s.length == 0) result = '';
    if(s.length == 1) result = s;

    for(let i=0; i<s.length; i++) {
        substr = s[i];
    
      for(let j=i+1; j< s.length; j++) {
        substr += s[j];
        // console.log(substr);
        if(substr == substr.split('').reverse().join('') && substr.length > result.length ) {
        result = substr;
       } else if(!result && substr.length) result = substr[0];
       else substr;
      }
    }
    console.log('result...', result);
  }

  reverseGivenArray() {
    // let a = [1, 2, 3, 4, 5, 6];

    this.rvrArrayList = this.rvrArray.split(',');
    let lastIndex = this.rvrArrayList.length - 1;
    for (let i = 0; i < this.rvrArrayList.length / 2; i++) {

      let temp = this.rvrArrayList[i];
      this.rvrArrayList[i] = this.rvrArrayList[lastIndex];
      this.rvrArrayList[lastIndex] = temp;
      lastIndex--;
    }

    // a.reverse();
  }

  smallestNumSum() {
    // finding smallest number whose sum is equal to given N
    let i = 1;
    while (1) {
      // Checking if number has
      // sum of digits = N
      if (this.getSum(i) == this.givenNum) {
        this.smallestNum = i;

        break;
      }
      i++;
    }


  }
  getSum(n: number) {
    let sum = 0;
    while (n != 0) {
      sum = sum + n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  findSmallestMissingPositiveNum() {
    // let arrLists = '1, 1, 0, -1, -2';

    // console.log('arrList', arrLists.split(',').map(Number));

    this.arrayLists = this.arrList.split(',').map(Number).sort((a, b) => {
      return a - b;
    });

    // console.log('this.arrList sorted', this.arrList);
    let index = this.arrayLists.findIndex(item => item > 0);
    let j = 1;
    for (let i = index; i < this.arrList.length + 1; i++) {
      if (this.arrayLists[i] === j) {
        j++;
      } else {
        this.smallestPosNum = j;
        // console.log('smallest missing positive number :', j ); 
        break;
      }
    }
  }

  longestConsecutiveSequencelength() {
    // Input: nums = [100,4,200,1,3,2]
    // Output: 4
    // Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

    this.consArrayList = this.consArray.split(',').map(i => parseInt(i));

    let obj: any = {};

    for (let i = 0; i < this.consArrayList.length; i++) {
      obj[this.consArrayList[i]] = this.consArrayList[i] + 1;
    }

    let key: any;
    let count = 1;
    for (key in obj) {
      Object.keys(obj).forEach(item => {
        if (item == obj[key]) {

          count++
        }
      });
    }

    this.arrayLength = count;
  }

  duplicateElementsInArray() {
    this.dupliArrayList = this.dupliArray.split(',');
    this.duplicateElements = [];
    for (let i = 0; i < this.dupliArrayList.length; i++) {
      let num = this.dupliArrayList[i];

      if (this.dupliArrayList.indexOf(num) !== i && this.duplicateElements.indexOf(num) === -1) {
        this.duplicateElements.push(num);
      }
    }



    // for(let i=0; i<this.dupliArrayList.length; i++) {
    //   let count =0;
    //     for(let j=0; j< this.dupliArrayList.length; j++) {
    //       if(this.dupliArrayList[i] == this.dupliArrayList[j]) {
    //         count++
    //         if(count> 1 && this.duplicateElements.indexOf(this.dupliArrayList[i])=== -1) {
    //           this.duplicateElements.push(this.dupliArrayList[i])
    //         }
    //       }
    //     }
    // }
    // console.log('element: ', this.duplicateElements);

  }
  stopWatch(action: any) {
    switch (action) {
      case 'start':
        this.interval = setInterval(() => {
          this.count++
          if (this.count === 100) {
            this.seconds++;
            this.count = 0;
          }
          if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
          }
        }, 10);
        break;
      case 'pause':
        console.log('pasue', this.seconds);

        clearInterval(this.interval);
        break;
      case 'stop':
        this.count = 10;
        this.seconds = 0;
        this.minutes = 0;
        clearInterval(this.interval);
        break;
      default:
        break;
    }

  }
  showLogic(...dataFunc: any) {
    this.showMylogic = dataFunc.toString();
    this.modal.open(DisplayCodeComponent, {
      width: 'auto',
      height: '80%',
      data: dataFunc.toString()
    });
  }
}
