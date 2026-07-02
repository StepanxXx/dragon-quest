const EMPTY_TEXT =
  "It appears that you haven't added any exercises to your favorites yet. To " +
  'get started, you can add exercises that you like to your favorites for ' +
  'easier access in the future.';

export class FavoritesView {
  private readonly list: HTMLUListElement;

  constructor(private readonly root: HTMLElement) {
    this.list = this.getElement('.favor-exercises-list');
  }

  renderEmptyState(): void {
    this.root.classList.add('favor-exercises-noitems');
    this.list.innerHTML = ''; 

    const text = document.createElement('p');
    text.className = 'favor-exercises-text';
    text.textContent = EMPTY_TEXT;
    this.list.append(text);
  }

  bindDeleteWorkout(handler: (id: string) => void): void {
    this.list.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
    
      const deleteBtn = target.closest<HTMLButtonElement>('[data-action="delete"]');
      if (!deleteBtn) return;

      const card = deleteBtn.closest<HTMLDivElement>('.workout-card');
      if (!card) return;


      const workoutId = card.dataset.workoutId;
      if (workoutId) {
        handler(workoutId); 
      }
    });
  }

  removeCardFromDOM(id: string): void {
    const card = this.list.querySelector(`[data-workout-id="${id}"]`);
    if (card) {
      const listItem = card.closest('li');
      if (listItem) {
        listItem.remove();
      } else {
        card.remove();
      }
    }
  }

  private getElement<T extends HTMLElement>(selector: string): T {
    const element = this.root.querySelector<T>(selector);
    if (!element) {
      throw new Error(`Element not found: ${selector}`);
    }
    return element;
  }
}

