import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  template: `
    <style>
      :host {
        position: inherit;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .angular-bogota {
        width: 45px;
      }
      .nx {
        width: 250px;
      }
      h1 {
        margin-top: -80px;
      }
      h2 {
        color: #003893;
      }
    </style>

    <img class="nx" src="https://nrwl.io/assets/nrwl-nx-blue.svg" alt="Nx" />
    <h2>
      <img
        class="angular-bogota"
        src="https://pbs.twimg.com/profile_images/1231695703778504705/J1YZAGmE_400x400.jpg"
        alt="Angular Bogotá"
      />
      Angular Bogotá
    </h2>
  `,
})
export class WelcomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
