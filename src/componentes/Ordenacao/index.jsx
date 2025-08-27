import "./Styles.css";

export default function Ordenacao() {
  return (
    <ul className="lista__ordenacao">
      <li>
        <a
          href="#"
          className=" lista-ordenacao__link lista-ordenacao__link--ativo"
        >
          Recentes
        </a>
      </li>
      <li>
        <a href="#" className="lista-ordenacao__link">
          Relevantes
        </a>
      </li>
    </ul>
  );
}
