import Event from "./Event/Event";
import Event2 from "./Event/Event2";
import Event3 from "./Event/Event3";
import Event4 from "./Event/Event4";
import Events from "./Event/Events";

function EventPage() {
  return (
    <div>
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('background.png')" }}
      ></div>
      <Event />
      <Event2 />
      <Event3 />
      <Event4 />
      <Events />
    </div>
  );
}

export default EventPage;
