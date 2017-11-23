import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleExt %>']
})
export class <%= classify(name) %>Component implements OnInit {
  modalId = 'modal' + Date.now();
  modal: any = {
    size: '',
    title: '',
    body: ''
  };

  constructor() {
  }

  ngOnInit() {
    this.showModal();
  }

  showModal(size = 'md', title = 'Modal Title', body = 'Modal body goes here') {
    this.modal.title = title;
    this.modal.message = body;
    this.modal.size = size;

    $(`#${this.modalId}`).modal({
        show: true,
        backdrop: 'static'
    });
  }

  hideModal() {
    $(`#${this.modalId}`).modal('hide').on('hidden.bs.modal', () => {
      this.modal = {
        size: '',
        title: '',
        body: ''
      };
    });
  }
}
