import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class ModalService {

  private modals: IModal[] = [];

  constructor() { }

  unregister(id: string) {
    this.modals = this.modals.filter(e => e.id !== id);
  }
  
  register(id: string) {
    this.modals.push({
      id: id,
      visible: false
    });
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find(e => e.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find(e => e.id === id);
    if (modal) {

      modal.visible = !modal.visible;
    }
  }

}
