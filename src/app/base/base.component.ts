import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { UIService } from '~/core/services/ui.service';

@Component({
  moduleId: module.id,
  selector: 'Base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {
  constructor(
    private uiService: UIService, 
    private routerExtension: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    console.log('===> ngOnInit Load detail: ');
    //this.routerExtension.navigate(['detail'], {relativeTo: this.activatedRoute});
    this.routerExtension.navigate([{ outlets: { base: ['book'] } }]);
  }
}
