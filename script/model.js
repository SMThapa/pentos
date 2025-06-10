const canvas = document.getElementById('myCanvas');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(10, 20, 0);
scene.add(directionalLight);

const loader = new THREE.GLTFLoader();

const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');
loader.setDRACOLoader(dracoLoader);

let model;
loader.load(
    'model/drone.glb',
    // 'model/VTOL_DEMO_Good.gltf',
    function (gltf) {
        model = gltf.scene;

        // Compute bounding box of the model
        const box = new THREE.Box3().setFromObject(model);
        // Get the center of the bounding box
        const center = new THREE.Vector3();
        box.getCenter(center);

        model.scale.set(1, 1, 1); 

        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        model.rotation.y = 0
        model.rotation.x = .15
        
        model.position.x = 0
        model.position.y = -.25
        model.position.z = -4
        
        scene.add(model);
        setupScrollAnimations();
    },
    undefined,
    function (error) {
        console.error('Error loading model:', error);        
    }
);

function animate() {
    requestAnimationFrame(animate);    
    renderer.render(scene, camera);    
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);    
});

ScrollTrigger.defaults({ scrub: 1 });


function setupScrollAnimations() {
  ScrollTrigger.defaults({ scrub: 1 });

    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "80% 70%",
            endTrigger: "#about",
            end: "30% 60%",
            scrub: 1,  
            // markers: true,          
        }
    });
    tl1.to(model.position, { x: 0.7, y: -0.2, z: -6 }, 0);
    tl1.to(model.rotation, { y: -Math.PI / 7, x:.55 }, 0);

    // Section 2: From #faq
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#about",         
            start: "80% 70%",   
            endTrigger: "#whyUs",      
            end: "30% 60%", 
            scrub: 1,                    
            // markers: true,
        }
    });
    tl2.to(model.position, { x: -.7, }, 0);
    tl2.to(model.rotation, { y: Math.PI/7 }, 0);


    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#whyUs",         
            start: "80% 70%",   
            endTrigger: "#blankSpace",      
            end: "30% 60%", 
            scrub: 1,
            // markers: true,
        }
    })
    tl3.to(model.position, { x: 0, y: -.5 }, 0);
    tl3.to(model.rotation, { y: 0, x: .15 }, 0);



    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#blankSpace",         
            start: "50% 60%",                 
            end: "80% 20%", 
            scrub: 1,
            // markers: true,
        }
    })
    tl4.to(model.position, { x: 0, z:5, y: .6 }, 0);
    tl4.to(model.rotation, { x:-.15,  }, 0);
}
