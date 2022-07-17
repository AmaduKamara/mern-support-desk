import { Link } from "react-router-dom";
import { FaTicketAlt, FaQuestionCircle } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do your need help with</h1>
        <p>Please choose from an option below.</p>
        <Link to="/new-ticket" className="btn btn-block">
          <FaQuestionCircle /> Create New Ticket
        </Link>
        <Link to="/tickets" className="btn btn-reverse btn-block">
          <FaTicketAlt /> View My Tickets
        </Link>
      </section>
    </>
  );
}

export default Home;
