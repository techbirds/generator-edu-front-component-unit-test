'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the stellar ' +
        chalk.red('edu-front-component-unit-test') +
        ' generator!'
      )
    );

    var prompts = [{
        type: 'input',
        name: 'componentName',
        message: '请输入测试组件名称 (component):',
        default: 'component'
      },
      {
        type: 'input',
        name: 'projectAuthor',
        message: '作者 (edu):',
        default: 'edu'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.projectName = props.componentName
    }.bind(this));
  }

  defaults() {

    // mkdirp projectName
    if (path.basename(this.destinationPath()) !== this.props.projectName) {
      this.log(
        'Your generator must be inside a folder named ' + this.props.projectName + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(this.props.projectName);
      this.destinationRoot(this.destinationPath(this.props.projectName));
    }

  }

  writing() {

    const data = {
      component_name: this.props.componentName,
      project_author: this.props.projectAuthor
    }

    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath('./'), data
    );

  }

  install() {
  }
};
