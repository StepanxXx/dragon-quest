export class FavorInfoView {
  private readonly root: HTMLElement;
  private context: 'favorites' | 'exercises' = 'favorites';

  constructor(root: HTMLElement) {
    this.root = root;
  }


  setContext(context: 'favorites' | 'exercises'): void {
    this.context = context;
    this.root.classList.toggle('favor-info--favorites', context === 'favorites');
    this.root.classList.toggle('favor-info--exercises', context === 'exercises');

    const text = this.root.querySelector<HTMLElement>('.dailynorm-text');
    text?.classList.toggle('hidden', context !== 'exercises');

    this.updateImages();
  }

  private updateImages(): void {
    const basePath =
      this.context === 'exercises'
        ? './img/favorites/fav-exercises'
        : './img/favorites';
    const container = this.root.closest('.quote-container');


    if (!container) {
      return;
    }
    const desktop = container.querySelector<HTMLSourceElement>(
      '[data-desktop-src]'
    );
    const tablet = container.querySelector<HTMLSourceElement>(
      '[data-tablet-src]'
    );
    const mobile = container.querySelector<HTMLSourceElement>(
      '[data-mobile-src]'
    );
    const img = container.querySelector<HTMLImageElement>('img');

    console.log({ desktop, tablet, mobile, img });
    desktop!.srcset = `${basePath}/women-outdoors.jpg 1x, ${basePath}/women-outdoors@2x.jpg 2x`;
    tablet!.srcset = `${basePath}/women-outdoors-tab.jpg 1x, ${basePath}/women-outdoors-tab@2x.jpg 2x`;
    mobile!.srcset = `${basePath}/women-outdoors-mob.jpg 1x, ${basePath}/women-outdoors-mob@2x.jpg 2x`;
    img!.src = `${basePath}/women-outdoors-mob.jpg`;
  }
}
