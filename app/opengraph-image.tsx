import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          color: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 700 }}>DF</div>
        <div style={{ maxWidth: 780 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.06em",
            }}
          >
            Building software that solves real problems.
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#525252",
            }}
          >
            Full-stack developer building clean, scalable products.
          </div>
        </div>
      </div>
    ),
    size
  )
}
