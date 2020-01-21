import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const lightSvg = 'assets/icon/svg/dahongdenglong.svg';

export const loadSvgResources = (iconRegistery: MatIconRegistry, sanitizer: DomSanitizer) => {
    iconRegistery.addSvgIcon('light', sanitizer.bypassSecurityTrustResourceUrl(lightSvg));
};
