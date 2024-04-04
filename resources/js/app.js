
import './bootstrap';
// import './mapa';
import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);


app.mount('#app');


import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//Primera Ecena Mapa
const mapaContainer = document.getElementById('mapa');

let scene = new THREE.Scene();
// scene.background = new THREE.Color('#00');
let camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });


// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize( 1250, 600 );
mapaContainer.appendChild(renderer.domElement);

// Raycaster y mouse
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

// Función para cambiar el color cuando el mouse pasa por encima
function onMouseMove(event) {
    // Calcular posición del mouse en coordenadas normalizadas (-1 a +1) para ambos ejes
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Actualizar el rayo con la posición del mouse
    raycaster.setFromCamera(mouse, camera);

    // Calcular objetos que intersectan con el rayo
    let intersects = raycaster.intersectObjects(scene.children, true);

    scene.children.forEach(function (child) {
        if (child.userData.isHighlightable) {
            if (intersects.length > 0 && child === intersects[0].object) {
                // Resaltar el objeto
                child.material.color.setHex(child.userData.highlightColor);
            } else {
                // Restaurar el color original si el mouse no está encima
                child.material.color.setHex(child.userData.originalColor);
            }
        }
    });
}

window.addEventListener('mousemove', onMouseMove, false);

// Agregar rectángulos con colores y propiedades
function addRectangle(geometry, color, x, y, zRotation, highlightColor, name) {
    let material = new THREE.MeshBasicMaterial({ color: color });
    let rectangle = new THREE.Mesh(geometry, material);
    rectangle.position.set(x, y, 0);
    if (zRotation) rectangle.rotation.z = zRotation;
    rectangle.userData = {
        isHighlightable: true,
        originalColor: color,
        highlightColor: highlightColor,
        name: name,
        originalPosition: { x: x, y: y }
    };

    scene.add(rectangle);

    rectangle.addEventListener('click', function() {
        onRectangleClick(rectangle);
    });

    return rectangle;
}

// Crear rectángulos
let mainRectangle = addRectangle(new THREE.PlaneGeometry(5, 2), 0xc8d404, 0, 2, 0, 0xF2EAD7, 'Neuroscience Area');
let conferenceRectangle = addRectangle(new THREE.PlaneGeometry(3, 1), 0x404444, 2, 0.5, 0, 0xF2EAD7, 'Alexion Area');
let investigationRectangle = addRectangle(new THREE.PlaneGeometry(3, 1), 0xf8ac04, -1, 0.5, 0, 0xF2EAD7, 'Respiratory Area');
let labRectangle = addRectangle(new THREE.PlaneGeometry(3, 1), 0x70d4dc, 3, 2.5, 1.57, 0xF2EAD7, 'Oncology Area');
let storageRectangle = addRectangle(new THREE.PlaneGeometry(5, 1), 0x684474, 0, 3.5, 0, 0xF2EAD7, 'Vaccine Area');
let officeRectangle = addRectangle(new THREE.PlaneGeometry(4, 1), 0xd8046c, -3, 2, 1.57, 0xF2EAD7, 'Cardio Area');

// Configurar cámara
camera.position.z = 3;
camera.position.y = 2;

// Animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onRectangleClick(rectangle) {
    // Mostrar el título por encima del rectángulo seleccionado

    // Iniciar animación
    startAnimation(rectangle);
}

function onMouseClick(event) {
    // Calcular posición del mouse en coordenadas normalizadas (-1 a +1) para ambos ejes
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Actualizar el rayo con la posición del mouse
    raycaster.setFromCamera(mouse, camera);

    // Calcular objetos que intersectan con el rayo
    let intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        let object = intersects[0].object;
        if (object.userData.isHighlightable) {
            // Llamar a la función de clic en el rectángulo
            onRectangleClick(object);
        }
    }
}

window.addEventListener('click', onMouseClick, false);

// Definir la función animateDown fuera del alcance de startAnimation
function animateDown(object, initialY) {
    if (object.position.y > initialY) {
        object.position.y -= 0.1;
        requestAnimationFrame(function() {
            animateDown(object, initialY);
        });
    } else {
        hideAdditionalInfo();
        resetView();
    }
}

function startAnimation(selectedObject) {
    let targetY = (window.innerWidth / window.innerHeight) + 2;
    let initialY = selectedObject.position.y;

    // Ocultar los demás rectángulos
    scene.children.forEach(function (child) {
        if (child !== selectedObject && child.userData.isHighlightable) {
            child.visible = false;
        }
    });

    let animateUp = function() {
        if (selectedObject.userData.name !== 'Lab' && selectedObject.userData.name !== 'Office') {
            if (selectedObject.position.y < targetY) {
                selectedObject.position.y += 0.1;
                requestAnimationFrame(animateUp);
            } else {
                // Después de que el rectángulo alcanza la posición deseada, mostrar el div con información adicional
                showAdditionalInfo(selectedObject.userData.name, selectedObject, initialY);
            }
        } else {
            let targetSec = (window.innerWidth / window.innerHeight) + 1;
            if (selectedObject.position.y < targetSec) {
                selectedObject.position.y += 0.1;
                requestAnimationFrame(animateUp);
            } else {
                // Después de que el rectángulo alcanza la posición deseada, mostrar el div con información adicional
                showAdditionalInfo(selectedObject.userData.name, selectedObject, initialY);
            }
        }
    };

    animateUp();
}


function showAdditionalInfo(rectangleName, obj, inY) {
    // Crear div para información adicional
    let infoDiv = document.createElement('div');
    infoDiv.className = 'additional-info'; // Añadir una clase para identificar este div fácilmente
    infoDiv.style.position = 'absolute';
    infoDiv.style.top = '900px'; // Colocar en la parte inferior
    infoDiv.style.left = '17%';
    infoDiv.style.transform = 'translateX(-50%)';
    infoDiv.style.background = 'linear-gradient(135deg, #2980b9, #2c3e50)';
    infoDiv.style.padding = '20px';
    infoDiv.style.borderRadius = '10px';
    infoDiv.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    infoDiv.style.color = '#fff';
    document.body.appendChild(infoDiv);

    // Botón para cerrar la información adicional
    let closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.padding = '5px 10px';
    closeButton.style.background = '#c0392b';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.color = '#fff';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Detener la propagación del evento de clic para evitar que llegue a los rectángulos
        animateDown(obj, inY);
        hideAdditionalInfo();
    });
    infoDiv.appendChild(closeButton);

    // Crear botón para redireccionar a una página
    let redirectButton = document.createElement('button');
    redirectButton.textContent = 'Ir a la página';
    redirectButton.style.marginTop = '20px';
    redirectButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Detener la propagación del evento de clic para evitar que llegue a los rectángulos
        $("#bmodal").click();
    });
    infoDiv.appendChild(redirectButton);

    // Título del rectángulo
    let title = document.createElement('h1');
    title.textContent = rectangleName;
    title.style.marginBottom = '10px';
    infoDiv.appendChild(title);

    // Información de relleno (Lorem Ipsum)
    let description = document.createElement('p');
    if (obj.userData.name == 'Oncology Area'){
        description.textContent = areas.areas[0].areaDescription;
        infoDiv.appendChild(description);

        // Información del lider
        let leaderTitle = document.createElement('p');
        leaderTitle.textContent ='Group Leader: ' + areas.areas[0].mainLeader;
        infoDiv.appendChild(leaderTitle);

        let leaderMail = document.createElement('p');
        leaderMail.textContent =  'Leader mail: ' + areas.areas[0].mainLeaderMail;
        infoDiv.appendChild(leaderMail)

        // Datos de contacto
        let contactData = document.createElement('div');
        contactData.innerHTML = '<h3>Subteams: </h3>' +
            '<p> ' + areas.areas[0].subteams[0].subTeam + '</p>' +
            '<p>' + areas.areas[0].subteams[0].supportMail + '</p>' +
            '</br>' +
            '<p>' + areas.areas[0].subteams[1].subTeam + '</p>' +
            '<p>' + areas.areas[0].subteams[1].supportMail + '</p>';
        infoDiv.appendChild(contactData);
    }

    // Información de relleno (Lorem Ipsum)
    let descriptionNeuro = document.createElement('p');
    if (obj.userData.name == 'Neuroscience Area'){
        descriptionNeuro.textContent = areas.areas[1].areaDescription;

        infoDiv.appendChild(descriptionNeuro);

        // Información del lider
        let leaderTitle = document.createElement('p');
        leaderTitle.textContent ='Group Leader: ' + areas.areas[1].mainLeader;
        infoDiv.appendChild(leaderTitle);

        let leaderMail = document.createElement('p');
        leaderMail.textContent =  'Leader mail: ' + areas.areas[1].mainLeaderMail;
        infoDiv.appendChild(leaderMail)

        // Datos de contacto
        let contactData = document.createElement('div');
        contactData.innerHTML = '<h3>Subteams: </h3>' +
            '<p> ' + areas.areas[1].subteams[0].subTeam + '</p>' +
            '<p>' + areas.areas[1].subteams[0].supportMail + '</p>' +
            '</br>' +
            '<p>' + areas.areas[1].subteams[1].subTeam + '</p>' +
            '<p>' + areas.areas[1].subteams[1].supportMail + '</p>';
        infoDiv.appendChild(contactData);
    }

    // Detener la propagación de clics en el div para evitar que lleguen a los rectángulos
    infoDiv.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}


function hideAdditionalInfo() {
    // Buscar y eliminar el div de información adicional si existe
    let infoDiv = document.querySelector('.additional-info');
    if (infoDiv) {
        infoDiv.parentNode.removeChild(infoDiv);
    }
}


function resetView() {
    scene.children.forEach(function (child) {
        if (child.userData.isHighlightable) {
            child.visible = true;
        }
    });

    scene.children.forEach(function (child) {
        if (child.userData.isHighlightable) {
            child.position.set(child.userData.originalPosition.x, child.userData.originalPosition.y, 0);
        }
    });
}

animate();

const areas = {
    "areas": [
      {
        "areaName": "Oncology Area",
        "areaDescription": "Oncology related research",
        "mainLeader": "Jorge Lopez",
        "mainLeaderMail": "jorge.lopez@astrazeneca.com",
        "subteams": [
          {
            "subTeam": "Team Alpha",
            "supportMail": "alpha.team@astrazeneca.com"
          },
          {
            "subTeam": "Team Bravo",
            "supportMail": "bravo.team@astrazeneca.com"
          }
        ]
      },
      {
        "areaName": "Neuroscience Area",
        "areaDescription": "Development of brand new neuroscience experiments",
        "mainLeader": "Ricardo Estrada",
        "mainLeaderMail": "ricardo.estrada@astrazeneca.com",
        "subteams": [
          {
            "subTeam": "Team Charlie",
            "supportMail": "charlie.team@astrazeneca.com"
          },
          {
            "subTeam": "Team Delta",
            "supportMail": "delta.team@astrazeneca.com"
          }
        ]
      }
    ]
  }

// --------------------------------------------------
//Segunda Ecena 1re Lab

const scene2 = new THREE.Scene();
scene2.background = new THREE.Color("#617C88");
const camera2 = new THREE.PerspectiveCamera(
  80,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer2 = new THREE.WebGLRenderer({ antialias: true });
const canvasContainer = document.getElementById('canvas');
canvasContainer.appendChild(renderer2.domElement);
renderer2.setSize( 760, 400 );

const texture = new THREE.TextureLoader().load("../img/cc_p1.jpg");

const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.enablePan = false;
controls2.enableZoom = false;
controls2.enableDamping = true;
controls2.maxPolarAngle = Math.PI / 2;

const g2 = new THREE.BoxGeometry(250, 100, 250);
const m2 = [
  new THREE.MeshBasicMaterial({
    color: "red",
    side: THREE.BackSide,
    // wireframe: true,
  }),
  new THREE.MeshBasicMaterial({
    color: "blue",
    side: THREE.BackSide,
    // wireframe: true,
  }),
  new THREE.MeshBasicMaterial({
    color: "green",
    side: THREE.BackSide,
    // wireframe: true,
  }),
  new THREE.MeshBasicMaterial({
    color: "yellow",
    side: THREE.BackSide,
    // wireframe: true,
  }),
  new THREE.MeshBasicMaterial({
    color: "purple",
    side: THREE.BackSide,
    // wireframe: true,
  }),
  new THREE.MeshBasicMaterial({
    color: "brown",
    side: THREE.BackSide,
    // wireframe: true,
  }),
];


m2.side = THREE.DoubleSide;
const skybox2 = new THREE.Mesh(g2, m2);

const sg2 = new THREE.SphereGeometry(200, 32, 16);
const m22 = new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
const sphere2 = new THREE.Mesh(sg2, m22);

scene2.add(sphere2);


// scene2.add(skybox);

camera2.position.z = 100;

controls2.update();
renderer2.domElement.style.width = "100%";
renderer2.domElement.style.height = "100%";

function animate2() {
  requestAnimationFrame(animate2);

  controls2.update();
  renderer2.render(scene2, camera2);
}

animate2();

