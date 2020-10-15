import { Person } from "./Person.js";

//Default export -> import ... from ''; Ex: import React from 'react'
//Named export -> import {...} from ''; Ex: import {Component} from 'react'

//export ->makes the class public
export default class Teacher extends Person {
  //extends -> inherits the Person class
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

//function export
export function promote() {
  console.log("promote");
}
