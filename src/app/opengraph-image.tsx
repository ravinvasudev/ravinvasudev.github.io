import { ImageResponse } from "next/og";

import { profile } from "../data/profile";
import { siteConfig } from "../data/site";

// Edge runtime avoids a @vercel/og font-path resolution failure when prerendering on Windows.
export const runtime = "edge";
export const alt = `${profile.name} | ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #030712 0%, #0A192F 100%)",
        color: "#F9FAFB",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#2563EB",
        }}
      >
        {siteConfig.shortName}
      </div>
      <div style={{ marginTop: 24, fontSize: 72, fontWeight: 700 }}>
        {profile.name}
      </div>
      <div style={{ marginTop: 12, fontSize: 34, color: "#D4AF37" }}>
        {profile.title}
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 26,
          color: "#9CA3AF",
          maxWidth: 900,
        }}
      >
        {profile.positioningStatement}
      </div>
    </div>,
    size,
  );
}
