import Image from "next/image";

export default function MilesCapitalLogo({
  className = "",
  iconOnly = false,
  size = 40,
}: {
  className?: string;
  iconOnly?: boolean;
  size?: number;
}) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: size * 0.28,
        background: "transparent",
        outline: "none",
        border: "none",
      }}
    >
      {/* ── Real MC icon image ── */}
      <Image
        src="/mc-icon.png"
        alt="Miles Capital"
        width={size}
        height={size}
        style={{ display: "block", flexShrink: 0 }}
        priority
      />

      {/* ── Wordmark ── */}
      {!iconOnly && (
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 700,
            fontSize: size * 0.52,
            letterSpacing: "0.07em",
            lineHeight: 1,
            color: "currentColor",
            whiteSpace: "nowrap",
          }}>
            MILES CAPITAL
          </span>
          <span style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: size * 0.165,
            letterSpacing: "0.25em",
            lineHeight: 1,
            color: "currentColor",
            opacity: 0.5,
            whiteSpace: "nowrap",
          }}>
            GROW YOUR CAPITAL EVERY MILE
          </span>
        </div>
      )}
    </div>
  );
}
