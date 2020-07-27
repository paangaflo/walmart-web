import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { NEVER, defer } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { SpinnerComponent } from './spinner.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private overlayRef: OverlayRef = undefined;

  constructor(private overlay: Overlay) {}

  private show(): void {
    
    Promise.resolve(null).then(() => {
      if (!this.overlayRef) {
        this.overlayRef = this.overlay.create({
          positionStrategy: this.overlay
          .position()
          .global()
          .centerHorizontally()
          .centerVertically(),
          hasBackdrop: true,
        });
        this.overlayRef.attach(new ComponentPortal(SpinnerComponent));
      }
    });
  }

  private hide(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = undefined;
    }
  }

  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      })
    );
  }).pipe(share());
}
