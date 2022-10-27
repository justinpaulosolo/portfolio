import { ContactForm } from "../../components/contact/Form";

export default function ContactPage() {
  return (
    <div className="flex flex-col mx-auto max-w-3xl">
      <h1 className="font-bold text-4xl">Contact</h1>
      <div className="pt-8">
        <ContactForm />
      </div>
    </div>
  );
}
