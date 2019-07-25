// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {
    constructor(attributes){
    this.newLength = attributes.length;
    this.newWidth = attributes.width;
    this.newHeight = attributes.height;
  }

  volume() {
    return this.newLength * this.newWidth * this.newHeight;
  }

  surfaceArea() {
    return 2 * (this.newLength * this.newWidth + this.newLength * this.newHeight + this.newWidth * this.newHeight);
  }

}

const cuboid1 = new CuboidMaker1({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid1.volume()); // 100
console.log(cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those 
// methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1{
    constructor(cuboidAttr) {
        super(cuboidAttr);
    }

    cubeVolume() {
        return this.newLength * this.newLength * this.newLength;
    }

    cubeSurfaceArea() {
        return 6 * (this.newLength * this.newLength)
    }
}

const cube = new CubeMaker({
    length: 3,
    width: 3,
    height: 3
});

console.log(cube.cubeVolume()); // 100
console.log(cube.cubeSurfaceArea()); 