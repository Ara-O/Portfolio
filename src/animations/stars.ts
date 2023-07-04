import * as THREE from "three"
import { BufferGeometry } from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

export default function renderStars(canvas: HTMLElement, height: number, width: number) {
  let sizes = {
    width,
    height,
    aspectRatio: width / height
  }

  const scene = new THREE.Scene()

  //   scene.add(
  //     new THREE.Mesh(
  //       new THREE.BoxGeometry(1),
  //       new THREE.MeshBasicMaterial({
  //         color: "purple"
  //       })
  //     )
  //   )

  const stars = new BufferGeometry()
  const numComponents = 3
  const numStars = 400
  const radius = 10

  const starsPositions = new Float32Array(numStars * 3)

  for (let i = 0; i < numStars; i++) {
    starsPositions[i] = (Math.random() - 0.5) * radius
    starsPositions[(i % 3) + 1] = (Math.random() - 0.5) * radius
    starsPositions[(i % 3) + 2] = (Math.random() - 0.5) * radius
  }

  console.log(starsPositions)
  stars.setAttribute("position", new THREE.BufferAttribute(starsPositions, numComponents))
  const starPoints = new THREE.Points(
    stars,
    new THREE.PointsMaterial({
      color: "white",
      size: 0.01,
      sizeAttenuation: true
    })
  )
  scene.add(starPoints)
  const camera = new THREE.PerspectiveCamera(75, sizes.aspectRatio, 0.1, 1000)
  camera.position.z = 5
  const controls = new OrbitControls(camera, canvas)

  const renderer = new THREE.WebGLRenderer({
    canvas
  })

  renderer.setSize(sizes.width, sizes.height)
  renderer.setClearColor("black")

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  function animate() {
    requestAnimationFrame(animate)
    starPoints.position.y += 0.001
    renderer.render(scene, camera)
    controls.update()
  }
  animate()
}
