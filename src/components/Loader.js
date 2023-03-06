import loadingIcon from "../assets/images/loader-regular.svg";

export default function Loader() {
  return (
    <div className="loader">
      <img
        className="loader--spinner"
        src={loadingIcon}
        alt="loading icon"
        aria-hidden="true"
      />
    </div>
  );
}
