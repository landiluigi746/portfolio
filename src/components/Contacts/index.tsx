import { contacts, ICONS_URL } from "../../config";

function Contacts() {
  return (
    <div className="pb-8">
      <h2 className="font font-extrabold text-zinc-100 text-center text-4xl pb-8">
        You can find me on
      </h2>
      <div className="flex flex-row justify-center items-center gap-4">
        {contacts.map((contact) => (
          <a href={contact.link}>
            <img src={ICONS_URL + "?i=" + contact.name}></img>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
