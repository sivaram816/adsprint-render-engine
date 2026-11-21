import React from "react";
import { AbsoluteFill, Composition, interpolate, useCurrentFrame } from "remotion";

const BasicTest = () => {
  const frame = useCurrentFrame();
  const titleY = interpolate(frame, [0, 24], [55, 0], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const orbX = interpolate(frame, [0, 149], [-180, 1280], { extrapolateRight: "clamp" });
  const progress = interpolate(frame, [0, 149], [0, 100], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #07111f 0%, #132b4f 55%, #35165c 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          left: orbX,
          top: 100,
          background: "radial-gradient(circle, rgba(35,211,238,0.34), rgba(35,211,238,0) 68%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          right: -130,
          bottom: -190,
          background: "radial-gradient(circle, rgba(183,91,255,0.32), rgba(183,91,255,0) 70%)",
        }}
      />
      <div style={{ opacity: titleOpacity, transform: `translateY(${titleY}px)`, textAlign: "center" }}>
        <div style={{ fontSize: 22, letterSpacing: 9, color: "#65e8ff", marginBottom: 24 }}>
          ADS PRINT · CLOUD RENDER TEST
        </div>
        <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -3 }}>
          Rendered in the <span style={{ color: "#65e8ff" }}>Cloud.</span>
        </div>
        <div style={{ fontSize: 30, color: "#d4def0", marginTop: 24 }}>
          Your first remote Remotion video
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 70, width: 720 }}>
        <div style={{ height: 5, background: "rgba(255,255,255,0.18)", borderRadius: 9, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: "#65e8ff", borderRadius: 9 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, color: "#b9c9df", fontSize: 18 }}>
          <span>GITHUB ACTIONS · UBUNTU RUNNER</span>
          <span>FRAME {frame + 1} / 150</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const RemotionRoot = () => (
  <Composition
    id="BasicTest"
    component={BasicTest}
    durationInFrames={150}
    fps={30}
    width={1280}
    height={720}
  />
);
