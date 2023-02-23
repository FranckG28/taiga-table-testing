import { TestBed } from '@angular/core/testing';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { TuiRootModule } from '@taiga-ui/core';
import { AppComponent } from './app.component';
import 'zone.js/dist/zone-testing';
import { highlight } from 'pretty-html-log';

var COMMENT_PSEUDO_COMMENT_OR_LT_BANG = new RegExp(
  '<!--[\\s\\S]*?(?:-->)?'
  + '<!---+>?'  // A comment with no body
  + '|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?'
  + '|<[?][^>]*>?',  // A pseudo-comment
  'g');

describe('AppComponent', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        TuiTableModule,
        TuiRootModule,
        TuiLetModule
      ]
    }).compileComponents();

  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log(highlight(compiled.innerHTML.replace(COMMENT_PSEUDO_COMMENT_OR_LT_BANG, '')));
  });

});
