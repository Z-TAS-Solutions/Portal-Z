import ToggleView from "./ToggleView";

export default function PQCPage({ id = "features" }) {
  return (
    <section id={id} className="bg-zinc-950">
      <ToggleView>Interactive Bull Shi</ToggleView>
    </section>
  );
}
