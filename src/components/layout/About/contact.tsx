import { Button } from "../../ui/button";

export default function Contact() {
  return (
    <div className="space-y-10 w-full md:w-[750px] p-5">
      <h1 className="w-full text-center text-3xl font-semibold">Contct Us</h1>
      <form className="flex flex-col gap-5 w-full">
        <input placeholder="Name" name="name" />
        <input placeholder="Email Address" name="email" />
        <textarea className="h-36" placeholder="message" name="message" />
        <Button>Send Ask</Button>
      </form>
    </div>
  );
}
