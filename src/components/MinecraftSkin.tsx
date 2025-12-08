"use client";

import { useEffect, useRef } from "react";
import { SkinViewer, IdleAnimation } from "skinview3d";

interface MinecraftSkinProps {
  skinUrl: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function MinecraftSkin({
  skinUrl,
  width = 300,
  height = 400,
  className,
}: MinecraftSkinProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<SkinViewer | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const viewer = new SkinViewer({
      canvas: canvasRef.current,
      width,
      height,
      skin: skinUrl,
    });

    viewer.autoRotate = false;
    viewer.animation = new IdleAnimation();
    viewer.animation.speed = 0.5;
    viewer.zoom = 0.9;
    viewer.camera.rotation.x = -0.2;
    viewer.camera.rotation.y = 0.5;
    viewer.camera.rotation.z = 0.1;
    viewer.controls.enableZoom = false;

    viewerRef.current = viewer;

    return () => {
      viewer.dispose();
    };
  }, [skinUrl, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background: "transparent" }}
    />
  );
}
