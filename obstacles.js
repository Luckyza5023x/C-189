AFRAME.registerComponent("obstacles",{

    init: function (){
        this.createObstacle()
    },





    createObstacle: function () {
        var pirateMap=document.querySelector("#pirate")
        var obstaclesEl=document.createElement("a-entity")

    obstaclesEl.setAttribute("id", "obs");
    obstaclesEl.setAttribute("position", {x:0, y:90, z:-100});
    obstaclesEl.setAttribute("scale", { x: 10, y: 10, z: 10 });

    obstaclesEl.setAttribute("gltf-model","assets/obstacles_guys_animated/scene.gltf")

    obstaclesEl.setAttribute("animation-mixer", {});

    obstaclesEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 3.2,
      });

      pirateMap.appendChild(obstaclesEl)
    }
})