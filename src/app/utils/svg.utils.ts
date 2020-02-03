import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


export const loadSvgResources = (iconRegistery: MatIconRegistry, sanitizer: DomSanitizer) => {
    const dir = 'assets/icon/svg/';
    iconRegistery.addSvgIcon('light', sanitizer.bypassSecurityTrustResourceUrl(`${dir}dahongdenglong.svg`));
    iconRegistery.addSvgIcon('day', sanitizer.bypassSecurityTrustResourceUrl(`${dir}day.svg`));
    iconRegistery.addSvgIcon('month', sanitizer.bypassSecurityTrustResourceUrl(`${dir}month.svg`));
    iconRegistery.addSvgIcon('week', sanitizer.bypassSecurityTrustResourceUrl(`${dir}week.svg`));
    iconRegistery.addSvgIcon('project', sanitizer.bypassSecurityTrustResourceUrl(`${dir}project.svg`));
    iconRegistery.addSvgIcon('projects', sanitizer.bypassSecurityTrustResourceUrl(`${dir}projects.svg`));
};
