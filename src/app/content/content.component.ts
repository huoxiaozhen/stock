import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(private router:Router) {
    router.events
      .filter( event => event instanceof NavigationEnd )
      .subscribe((event:NavigationEnd) => {
        if(event.url == '/dashboard'){
          this.pageTitle = '这里是首页';
          this.pageDesc = '';
        }else if(event.url.startsWith('/stock')){
          this.pageTitle = '股票信息管理';
          this.pageDesc = '进行股票信息基本操作';
        }
      })
  }

  ngOnInit() {
  }

}
