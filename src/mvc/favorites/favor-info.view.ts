export class FavorInfoView {
  private readonly root: HTMLElement;
  private context: 'favorites' | 'exercises' = 'favorites';

  constructor(root: HTMLElement) {
    this.root = root;
  }

  setContext(context: 'favorites' | 'exercises'): void {
    this.context = context;
    this.updateImages();
  }

  private updateImages(): void {
    const basePath =
      this.context === 'exercises'
        ? './img/favorites/fav-exercises'
        : './img/favorites';

    console.log(this.context);
    console.log(basePath);
    const desktop = this.root.querySelector<HTMLSourceElement>(
      '[data-desktop-src]'
    );
    const tablet = this.root.querySelector<HTMLSourceElement>(
      '[data-tablet-src]'
    );
    const mobile = this.root.querySelector<HTMLSourceElement>(
      '[data-mobile-src]'
    );
    const img = this.root.querySelector<HTMLImageElement>('img');

    desktop!.srcset = `${basePath}/women-outdoors.jpg 1x, ${basePath}/women-outdoors@2x.jpg 2x`;
    tablet!.srcset = `${basePath}/women-outdoors-tab.jpg 1x, ${basePath}/women-outdoors-tab@2x.jpg 2x`;
    mobile!.srcset = `${basePath}/women-outdoors-mob.jpg 1x, ${basePath}/women-outdoors-mob@2x.jpg 2x`;
    img!.src = `${basePath}/women-outdoors-mob.jpg`;
  }
}
