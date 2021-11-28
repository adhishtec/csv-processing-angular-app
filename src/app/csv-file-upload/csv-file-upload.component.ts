import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'lodash';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-csv-file-upload',
  templateUrl: './csv-file-upload.component.html',
  styleUrls: ['./csv-file-upload.component.scss'],
})
export class CsvFileUploadComponent implements OnInit {
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
  });

  fileContent: string | undefined = '';
  outputFileList: string[] | undefined = [];
  bTree: Tree = new Tree();
  toShow: any;
  treeArray: any[] | undefined = [];

  constructor() {}

  ngOnInit(): void {}

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.readFileContent(file);
    }
  }

  readFileContent(file: any) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.fileContent = fileReader.result?.toString();
      this.modifyContent();
      this.convertToTree();
    };
    fileReader.readAsText(file);
  }

  modifyContent() {
    const contentList = this.fileContent?.trim().split(/\s+/);
    this.outputFileList = contentList;
  }

  convertToTree() {
    this.outputFileList?.forEach((v) => this.bTree.insert(v));
    // Tree traversal
    this.treeArray = this.bTree.traverse(this.bTree.getRootNode());
    console.log('Tree', this.bTree);
    console.log('Tree array', this.treeArray);
  }
}

// Node class
class Node {
  data: any;
  left: Node = null as any;
  right: Node = null as any;
  count: number;
  constructor(data?: any) {
    this.data = data;
    this.count = 1;
    this.left = null as any;
    this.right = null as any;
  }
}

// Tree Class
class Tree {
  root: Node = null as any;
  constructor() {
    this.root = null as any;
  }

  insert(data: any) {
    const root = this.getRootNode();
    const existingNode = this.contains(root, data);
    let newNode: Node;
    if (!isEmpty(existingNode)) {
      existingNode.count = existingNode.count + 1;
      newNode = existingNode;
    } else {
      newNode = new Node(data);

      if (this.root === null) this.root = newNode;
      else this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: any, newNode: any) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  getRootNode() {
    return this.root;
  }

  inorder(node: any) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  traverse(node: any): any {
    if (node === null) return [];
    return [
      ...this.traverse(node.left),
      { data: node.data, count: node.count },
      ...this.traverse(node.right),
    ];
  }

  findNode(data: any) {
    const node = this.getRootNode();
    if (node !== null) {
      if (node.data === data) {
        return node;
      }
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }

  contains(root: Node, data: any): any {
    if (root === null) return null;
    if (root.data === data) return root;
    if (root.data > data) return this.contains(root.left, data);
    return this.contains(root.right, data);
  }
}
