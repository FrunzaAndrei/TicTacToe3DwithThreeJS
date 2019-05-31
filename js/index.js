var win = false;
var xtexture, otexture;
window.onload = function () {
    turn = 1;
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

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
    canvas.addEventListener("mousedown", onDocumentMouseDown, false);

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

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    var animate = function () {
        if (turn == 1) {
            cube1.rotation.y += 0.01;
            cube2.rotation.y += 0.01;
            cube3.rotation.y += 0.01;
            cube4.rotation.y += 0.01;
            cube5.rotation.y += 0.01;
            cube6.rotation.y += 0.01;
            cube7.rotation.y += 0.01;
            cube8.rotation.y += 0.01;
            cube9.rotation.y += 0.01;
        } else {
            cube1.rotation.z += 0.01;
            cube2.rotation.z += 0.01;
            cube3.rotation.z += 0.01;
            cube4.rotation.z += 0.01;
            cube5.rotation.z += 0.01;
            cube6.rotation.z += 0.01;
            cube7.rotation.z += 0.01;
            cube8.rotation.z += 0.01;
            cube9.rotation.z += 0.01;
        }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    xtexture = new THREE.TextureLoader().load("../image/x.png");
    xtexture.anisotropy = 16;
    otexture = new THREE.TextureLoader().load("../image/0.png");
    otexture.anisotropy = 16;

    var firstPlayerSelected = [];
    var secondPlayerSelected = [];
    var player1 = [];
    var player2 = [];
    var contor1 = 0;
    var contor2 = 0;
    var globalContor = 0;

    function onDocumentMouseDown(event) {
        event.preventDefault();

        mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        meshObjects = [
            cube1,
            cube2,
            cube3,
            cube4,
            cube5,
            cube6,
            cube7,
            cube8,
            cube9
        ];
        var intersects = raycaster.intersectObjects(meshObjects);

        if (intersects.length > 0) {
            if (turn == 1) {
                if (secondPlayerSelected.includes(intersects[0].object.uuid)) return;
                globalContor++;
                turn = 2;
                contor1++;

                intersects[0].object.material.map = xtexture;
                intersects[0].object.material.needsUpdate = true;
                intersects[0].object.rotation.y += 0.1;

                firstPlayerSelected.push(intersects[0].object.uuid);
                player1.push(intersects[0].object.name);

                document.getElementById("info1").innerHTML = "Player " + turn;

                if (contor1 >= 3) checkGame(player1, "Player 1");
            } else {
                if (firstPlayerSelected.includes(intersects[0].object.uuid)) return;
                globalContor++;
                turn = 1;
                contor2++;

                intersects[0].object.material.map = otexture;
                intersects[0].object.material.needsUpdate = true;

                secondPlayerSelected.push(intersects[0].object.uuid);
                player2.push(intersects[0].object.name);

                document.getElementById("info1").innerHTML = "Player " + turn;

                if (contor2 >= 3) checkGame(player2, "Player 2");
            }
        }
    }

    function checkGame(arrayPozitie, text) {
        var l = arrayPozitie.length;
        var isTrue = 0;
        var winningCombinations = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7]
        ];

        // daca este remiza
        if (globalContor == 9 && isTrue == 0) {
            document.getElementById("GameOver").style.display = "block";
            document.querySelector("#textGameOver > h2").innerHTML = `It is a draw!`;
        }

        //parcurgere array-variante castig
        for (var i = 0; i < 8; i++) {
            isTrue = 0;
            // array-ul facut de user
            for (var j = 0; j < l; j++) {
                if (winningCombinations[i].includes(arrayPozitie[j])) {
                    isTrue++;
                    if (isTrue == 3) {
                        document.getElementById("GameOver").style.display = "block";
                        document.querySelector(
                            "#textGameOver > h2"
                        ).innerHTML = `${text} WON !`;
                        return;
                    }
                }
            }
        }
    }
};
