window.onload = function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    let canvas = document.getElementById("webGL");
    canvas.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls(camera, canvas);
    camera.position.z = 15;
    controls.update();
    controls.maxAzimuthAngle = 1;
    controls.minAzimuthAngle = -1;
    controls.maxPolarAngle = 2;
    controls.minPolarAngle = -2;
    controls.minDistance = 4;

    var directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.x = 0;
    directionalLight.position.y = 3;
    directionalLight.position.z = 10;
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    var geometryPlane = new THREE.PlaneGeometry(70, 70, 70);
    var materialPlane = new THREE.MeshLambertMaterial({
      color: 0x336699,
      side: THREE.DoubleSide
    });
    var plane = new THREE.Mesh(geometryPlane, materialPlane);
    scene.add(plane);
    plane.rotateX(Math.PI / 2);
    plane.position.y = -4.5;
    plane.receiveShadow = true;
  
    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var materialWhite = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: new THREE.TextureLoader().load("../image/bg.jpg"),
      wireframe: false
    });

    var cube1 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube1);
  cube1.castShadow = true;
  cube1.position.x = -2.8;
  cube1.position.y = 2.8;
  cube1.name = 1;

  var cube2 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube2);
  cube2.castShadow = true;
  cube2.position.y = 2.8;
  cube2.name = 2;

  var cube3 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube3);
  cube3.castShadow = true;
  cube3.position.x = 2.8;
  cube3.position.y = 2.8;
  cube3.name = 3;

  var cube4 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube4);
  cube4.castShadow = true;
  cube4.position.x = -2.8;
  cube4.name = 4;

  var cube5 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube5);
  cube5.castShadow = true;
  cube5.name = 5;

  var cube6 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube6);
  cube6.castShadow = true;
  cube6.position.x = 2.8;
  cube6.name = 6;

  var cube7 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube7);
  cube7.castShadow = true;
  cube7.position.x = -2.8;
  cube7.position.y = -2.8;
  cube7.name = 7;

  var cube8 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube8);
  cube8.castShadow = true;
  cube8.position.y = -2.8;
  cube8.name = 8;

  var cube9 = new THREE.Mesh(geometry, materialWhite.clone());
  scene.add(cube9);
  cube9.castShadow = true;
  cube9.position.x = 2.8;
  cube9.position.y = -2.8;
  cube9.name = 9;
  
    //for the responsiveness of the scene
    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    var animate = function () {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };


    animate();

}