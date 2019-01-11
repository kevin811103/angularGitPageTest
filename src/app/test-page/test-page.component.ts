import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  isGo:boolean=false;
  timer:any;
  elem: any;
  countDownNumber:number=15;
  totalCount:number=0;
  constructor() { }

  ngOnInit() {
    this.elem = document.documentElement;
  }

  // https://stackoverflow.com/questions/51998594/how-to-make-google-chrome-go-full-screen-in-angular-4-application
  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  closeFullscreen() {

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } 
  }
  countDownReduce(){
    // 減數字
    this.countDownNumber>0?this.countDownNumber--:'';
  }
  countDownAdd(){
    // 加數字
    this.countDownNumber++;
  }
  stop(){
    this.isGo=false;
    clearInterval(this.timer);

  }
  returnCountDonwMinu(){
    return Math.floor(this.totalCount/60);
  }
  startCountDown(){
    this.isGo=true;
    console.log("doCountDown");
    this.totalCount=this.countDownNumber*60;
   console.log("總共",this.totalCount,"秒") 
  //  clearInterval(this.time);

    this.timer=setInterval(()=>{
      if(this.totalCount>0){
        this.totalCount--;
      }else{
        clearInterval(this.timer);
        this.isGo=false;
        alert("時間到了")
      }
    },1000)
    // setTimeout(() => {
    //   this.totalCount
    // }, 1000);
  }
}
