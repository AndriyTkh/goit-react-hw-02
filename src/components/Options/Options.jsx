import css from "./Options.module.css";

export default function Options({ update, reset, total }) {
  return (
    <div className={css.optionBox}>
      <button
        onClick={() => {
          update("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          update("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          update("bad");
        }}
      >
        Bad
      </button>
      {total > 0 && (
        <button
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
