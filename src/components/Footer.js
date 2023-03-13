export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "footer dark" : "footer"}>
      Made by{" "}
      <a href="https://bnielsen.dev" target="_blank" rel="noreferrer">
        Brandon Nielsen
      </a>
    </footer>
  );
}
