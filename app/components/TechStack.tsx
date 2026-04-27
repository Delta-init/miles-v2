"use client";

import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

// 10 black · 10 green · 10 red · 50 white · 10 BTC · 10 USDT = 100 balls
const glyphs = ["$", "€", "£", "¥", "₹", "₿", "₩", "₽"];

const currencies: Array<{ glyph: string; color: string; bg: string; logo?: "btc" | "usdt" }> = [
  // — Black (10) —
  { glyph: "£", color: "#ffffff", bg: "#0c1410" },
  { glyph: "₹", color: "#ffffff", bg: "#0c1410" },
  { glyph: "₿", color: "#f7931a", bg: "#0c1410" },
  { glyph: "₩", color: "#ffffff", bg: "#0c1410" },
  { glyph: "₽", color: "#ffffff", bg: "#0c1410" },
  { glyph: "€", color: "#aaaaff", bg: "#0c1410" },
  { glyph: "$", color: "#ccffcc", bg: "#0c1410" },
  { glyph: "¥", color: "#ffaaaa", bg: "#0c1410" },
  { glyph: "₿", color: "#ffcc88", bg: "#111111" },
  { glyph: "₽", color: "#dddddd", bg: "#111111" },
  // — Green (10) —
  { glyph: "$", color: "#0c1410", bg: "#22c55e" },
  { glyph: "€", color: "#0c1410", bg: "#16a34a" },
  { glyph: "£", color: "#0c1410", bg: "#4ade80" },
  { glyph: "¥", color: "#0c1410", bg: "#22c55e" },
  { glyph: "₹", color: "#0c1410", bg: "#15803d" },
  { glyph: "₿", color: "#0c1410", bg: "#4ade80" },
  { glyph: "₩", color: "#0c1410", bg: "#22c55e" },
  { glyph: "₽", color: "#0c1410", bg: "#16a34a" },
  { glyph: "$", color: "#0c1410", bg: "#86efac" },
  { glyph: "€", color: "#0c1410", bg: "#15803d" },
  // — Red (10) —
  { glyph: "$", color: "#ffffff", bg: "#dc2626" },
  { glyph: "€", color: "#ffffff", bg: "#b91c1c" },
  { glyph: "£", color: "#ffffff", bg: "#ef4444" },
  { glyph: "¥", color: "#ffffff", bg: "#dc2626" },
  { glyph: "₹", color: "#ffffff", bg: "#b91c1c" },
  { glyph: "₿", color: "#ffffff", bg: "#ef4444" },
  { glyph: "₩", color: "#ffffff", bg: "#dc2626" },
  { glyph: "₽", color: "#ffffff", bg: "#991b1b" },
  { glyph: "$", color: "#ffffff", bg: "#ef4444" },
  { glyph: "€", color: "#ffffff", bg: "#b91c1c" },
  // — White (50) —
  ...[...Array(50)].map((_, i) => ({
    glyph: glyphs[i % glyphs.length],
    color: "#1a1a1a",
    bg: "#ffffff",
  })),
  // — BTC (10) —
  ...[...Array(10)].map(() => ({
    glyph: "₿", color: "#ffffff", bg: "#f7931a", logo: "btc" as const,
  })),
  // — USDT (10) —
  ...[...Array(10)].map(() => ({
    glyph: "₮", color: "#ffffff", bg: "#26a17b", logo: "usdt" as const,
  })),
];

function makeCurrencyTexture({
  glyph,
  color,
  bg,
}: {
  glyph: string;
  color: string;
  bg: string;
}) {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = color;
  ctx.font = "bold 360px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(glyph, size / 2, size / 2 + 10);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeBTCTexture() {
  const size = 512;
  const c = document.createElement("canvas");
  c.width = size; c.height = size;
  const ctx = c.getContext("2d")!;
  // bg
  ctx.fillStyle = "#f7931a";
  ctx.fillRect(0, 0, size, size);
  // white circle badge
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 220, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.fill();
  // ₿ symbol
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 300px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("₿", size / 2 + 8, size / 2 + 12);
  // outer ring
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 230, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.lineWidth = 12;
  ctx.stroke();
  // label
  ctx.font = "bold 60px Arial, Helvetica, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.fillText("BTC", size / 2, size - 52);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function makeUSDTTexture() {
  const size = 512;
  const c = document.createElement("canvas");
  c.width = size; c.height = size;
  const ctx = c.getContext("2d")!;
  // bg gradient (Tether brand)
  const grad = ctx.createLinearGradient(0, 0, 0, size);
  grad.addColorStop(0, "#26a17b");
  grad.addColorStop(1, "#1a7a5e");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  // white circle badge
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 220, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.fill();
  // ₮ symbol
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 290px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("₮", size / 2, size / 2 + 8);
  // outer ring
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, 230, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.lineWidth = 12;
  ctx.stroke();
  // label
  ctx.font = "bold 60px Arial, Helvetica, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.fillText("USDT", size / 2, size - 52);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const scales = [0.35, 0.45, 0.5, 0.4, 0.55];
// Exactly 30 spheres — one per currency entry, scale randomised
const spheres = currencies.map((_, i) => ({
  scale: scales[i % scales.length],
  materialIndex: i,
}));

// Tracks mouse in NDC — updated via window-level listener so it works
// even when the canvas wrapper has pointer-events: none.
const globalPointer = { x: 0, y: 0 };

/* ─── Sphere ──────────────────────────────────────────────── */
type SphereProps = {
  scale: number;
  materialIndex: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  scale,
  materialIndex: _materialIndex,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);
  const vec = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    vec.current
      .copy(api.current.translation())
      .normalize()
      .multiplyScalar(-12 * delta * scale);
    // Y gets a slightly stronger pull so they cluster mid-screen
    vec.current.y *= 2.5;
    api.current.applyImpulse(vec.current, true);
  });

  return (
    <RigidBody
      linearDamping={0.65}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(4)]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

/* ─── Pointer ─────────────────────────────────────────────── */
function Pointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  const { camera } = useThree();
  const smoothed = useRef(new THREE.Vector3(0, 0, 0));
  const raycaster = useRef(new THREE.Raycaster());
  const ndc = useRef(new THREE.Vector2());
  // z=0 plane — where the balls live
  const plane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), 0));
  const hit = useRef(new THREE.Vector3());

  useFrame(() => {
    if (!isActive || !ref.current) return;

    // Unproject NDC → world at z=0
    ndc.current.set(globalPointer.x, globalPointer.y);
    raycaster.current.setFromCamera(ndc.current, camera);
    raycaster.current.ray.intersectPlane(plane.current, hit.current);

    smoothed.current.lerp(hit.current, 0.15);
    ref.current.setNextKinematicTranslation(smoothed.current);
  });

  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2.5]} />
    </RigidBody>
  );
}

/* ─── Main component ──────────────────────────────────────── */
export default function TechStack() {
  const [isActive, setIsActive] = useState(true);
  const [textures, setTextures] = useState<THREE.CanvasTexture[] | null>(null);

  useEffect(() => {
    setTextures(
      currencies.map((c) =>
        c.logo === "btc"
          ? makeBTCTexture()
          : c.logo === "usdt"
          ? makeUSDTTexture()
          : makeCurrencyTexture(c)
      )
    );
  }, []);

  // Feed globalPointer from window — works even with pointer-events:none on canvas
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      globalPointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      globalPointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const materials = useMemo(() => {
    if (!textures) return null;
    return textures.map((texture, i) => {
      const { bg, logo } = currencies[i];
      const isBlack = bg === "#0c1410" || bg === "#111111";
      const isWhite = bg === "#ffffff";
      const isCrypto = logo === "btc" || logo === "usdt";
      return new THREE.MeshPhysicalMaterial({
        map: texture,
        emissive: isBlack ? "#000000" : isWhite ? "#ffffff" : "#000000",
        emissiveMap: texture,
        emissiveIntensity: isBlack ? 0 : isWhite ? 0.1 : isCrypto ? 0.05 : 0.15,
        metalness: isBlack ? 0.8 : isWhite ? 0.1 : isCrypto ? 0.6 : 0.3,
        roughness: isBlack ? 0.15 : isWhite ? 0.9 : isCrypto ? 0.25 : 0.8,
        clearcoat: isBlack ? 0.7 : isWhite ? 0.05 : isCrypto ? 0.8 : 0.2,
      });
    });
  }, [textures]);

  if (!materials) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => {
          state.gl.toneMappingExposure = 1.5;
        }}
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[props.materialIndex]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment preset="studio" environmentIntensity={0.5} />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
