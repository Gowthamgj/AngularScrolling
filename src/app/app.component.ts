import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = '---We are learning---';
  tiles = [
    {
      skillName : 'HTML 5',
      skillInfo : 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
      skillIcon: '../assets/images/html.png'
    },
    {
      skillName : 'CSS',
      skillInfo : 'Cascading Style Sheets, a declarative stylesheet language for structured documents.',
      skillIcon: '../assets/images/css.png'
    },
    {
      skillName : 'JS',
      skillInfo : 'javascript is used for dynamic rendering in html',
      skillIcon: '../assets/images/js.jpg'
    },
    {
      skillName : 'DataStructures',
      skillInfo : 'data structure is a particularwayoforganizing andmodified efficiently',
      skillIcon: '../assets/images/data-structures.png'
    },
    {
      skillName : 'Design',
      skillInfo : 'Design is the creation of a plan or convention for the construction of an object',
      skillIcon: '../assets/images/design.png'
    },
    {
      skillName : 'Docker',
      skillInfo : 'Docker is a computer program that performs operating-system-level virtualization also known as containerization',
      skillIcon: '../assets/images/docker.png'
    },
    {
      skillName : 'Express',
      skillInfo : 'Loreum ipsuiumaskljflncnsaknfhasljfkljasljflasjf',
      skillIcon: '../assets/images/express.png'
    },
    {
      skillName : 'FireBase',
      skillInfo : 'Firebase is a mobile and web application development platform developed by Firebase',
      skillIcon: '../assets/images/firebase.png'
    },
    {
      skillName : 'FunctionalProgramming',
      skillInfo : 'In computer science,functional programming is a programming paradigm—a style of building the structure and elements',
      skillIcon: '../assets/images/functional-programming.png'
    },
    {
      skillName : 'git',
      skillInfo : 'Git is a version control system for tracking changes in computer files and coordinating work on those files among',
      skillIcon: '../assets/images/git.png'
    },
    {
      skillName : 'gridflex',
      skillInfo : ' Loreum ipsuiumaskljflncnsaknfhasljfkljasljflasjf',
      skillIcon: '../assets/images/git.png'
    },
    {
      skillName : 'ionic',
      skillInfo : 'jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML',
      skillIcon: '../assets/images/ionic.png'
    },
    {
      skillName : 'jquery',
      skillInfo : 'jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML',
      skillIcon: '../assets/images/jquery.png'
    },
    {
      skillName : 'MongoDB',
      skillInfo : ' MongoDB is a free and open-source cross-platform document-oriented database program',
      skillIcon: '../assets/images/mongodb.png'
    },
    {
      skillName : 'unix',
      skillInfo : 'Unix is a family of multitasking, multiuser computer',
      skillIcon: '../assets/images/unix.png '
    },
    {
      skillName : 'nodeJs',
      skillInfo : 'Node.js is an open-source,cross-platform JavaScript run-time environment that',
      skillIcon: '../assets/images/nodejs.png'
    },
    {
      skillName : 'nodeJs',
      skillInfo : 'Node.js is an open-source,cross-platform JavaScript run-time environment that',
      skillIcon: '../assets/images/nodejs.png'
    },
    {
      skillName : 'npm',
      skillInfo : 'It is the default package manager for the JavaScript runtime ',
      skillIcon: '../assets/images/npm.png'
    },
    {
      skillName : 'responsive',
      skillInfo : 'reacting quickly and positively',
      skillIcon: '../assets/images/responsive.png'
    },
    {
      skillName : 'RxJS',
      skillInfo : 'In computing, React is a JavaScript library for building user ',
      skillIcon: '../assets/images/RxJS.png'
    }
  ];
}
