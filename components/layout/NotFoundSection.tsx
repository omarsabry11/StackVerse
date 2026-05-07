import Image from 'next/image'


export default function NotFoundSection() {
  return (
    <section
      id="not_found"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div className="myContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "24px",
          }}
        >
          <Image
            src={"/assets/images/NotFound.svg"}
            alt="404 NOT FOUND"
            width={400}
            height={400}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
            }}
          />

          <div>
            <h1
              style={{
                fontSize: "64px",
                fontWeight: "700",
                color: "#1f2937",
                marginBottom: "12px",
              }}
            >
              404 Not Found
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#6b7280",
              }}
            >
              Oops! The page you are looking for does not exist.
            </p>
          </div>

          <button
            style={{
              padding: "14px 28px",
              borderRadius: "12px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "0.3s",
            }}
          >
            Back To Home
          </button>
        </div>
      </div>
    </section>
  )
}
