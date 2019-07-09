import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-project',
  templateUrl: './submit-project.component.html',
  styleUrls: ['./submit-project.component.css']
})
export class SubmitProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmitProject(details:NgForm)
  {
    console.log(details.value);
    
  }
}
