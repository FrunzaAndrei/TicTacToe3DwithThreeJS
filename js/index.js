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

    let canvas = document.getElementById("webGL");
    canvas.appendChild(renderer.domElement);

    camera.position.z = 15;

  


    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var materialWhite = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: false
    });

    var cube1 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube1);
    cube1.position.x = -2.8;
    cube1.position.y = 2.8;
    cube1.name = 1;

    var cube2 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube2);
    cube2.position.y = 2.8;
    cube2.name = 2;

    var cube3 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube3);
    cube3.position.x = 2.8;
    cube3.position.y = 2.8;
    cube3.name = 3;

    var cube4 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube4);
    cube4.position.x = -2.8;
    cube4.name = 4;

    var cube5 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube5);
    cube5.name = 5;

    var cube6 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube6);
    cube6.position.x = 2.8;
    cube6.name = 6;

    var cube7 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube7);
    cube7.position.x = -2.8;
    cube7.position.y = -2.8;
    cube7.name = 7;

    var cube8 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube8);
    cube8.position.y = -2.8;
    cube8.name = 8;

    var cube9 = new THREE.Mesh(geometry, materialWhite.clone());
    scene.add(cube9);
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