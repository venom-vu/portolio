import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", paddingTop: "80px" }}>
      <h1 style={{ fontSize: "120px", fontWeight: 700, color: "var(--primary)" }}>
        404
      </h1>
      <p style={{ color: "var(--gray)", marginTop: "16px" }}>Page not found</p>
      <Link
        to="/"
        className="button"
        style={{ marginTop: "32px", display: "inline-block" }}
      >
        Go home =&gt;
      </Link>
    </div>
  );
}
