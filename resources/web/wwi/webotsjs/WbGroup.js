// Copyright 1996-2020 Cyberbotics Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {WbBaseNode} from "./WbBaseNode.js"

class WbGroup extends WbBaseNode{
  constructor(id){
    super(id);
    this.children = [];
  }

  delete() {
    if (typeof this.parent === 'undefined'){
      World.instance.sceneTree.splice(object, 1);
    }

    super.delete();
  }

  createWrenObjects(isTransform){
    super.createWrenObjects();

    if(!isTransform) {
      this.children.forEach(child => {
        child.createWrenObjects()
      });
    }
  }

  preFinalize() {
    super.preFinalize();

    this.children.forEach( child => child.preFinalize());
  }

  postFinalize() {
    super.postFinalize();

    this.children.forEach( child => child.postFinalize());
  }
}

export{WbGroup}
