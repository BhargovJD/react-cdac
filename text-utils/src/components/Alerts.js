export default function Alerts({ alert }) {
  return (
    <>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alert.type}!</strong> {alert.msg}
          <button
            type="button"
            className="btn"
            // data-bs-dismiss="alert"
            // aria-label="Close"
          />
        </div>
      )}
    </>
  );
}
