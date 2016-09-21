import { NgModule } from '@angular/core';

import { IfElse } from './ifElse';
import { LoopThrough } from './loopThrough';
import { IfElseStar, IfTrueCase, IfFalseCase } from './ifElseStar';

@NgModule({
    imports: [],
    declarations: [ IfElse, LoopThrough, IfElseStar, IfTrueCase, IfFalseCase ],
    exports: [ IfElse, LoopThrough, IfTrueCase, IfFalseCase, IfElseStar ]
}) export class CustomDirectiveModule {};