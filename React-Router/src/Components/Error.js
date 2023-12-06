import "../index.css";

export default function Error() {
  return (
    <>
      <div className="error_page">
        <img src="/images/404.jpg" alt="404 page" />

        <div className="text-overlay">
          <h2>404 Not Found</h2>
          <p>Oops! The page you're looking for does not exist.</p>
        </div>
      </div>
    </>
  );
}
