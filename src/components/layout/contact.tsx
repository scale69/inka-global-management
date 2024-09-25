import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function Contact() {
  return (
    <div className="space-y-10 w-full md:w-[750px] p-5">
      <h1 className="w-full text-center text-3xl font-semibold">Contct Us</h1>
      <form className="flex flex-col gap-5 w-full">
        <Input placeholder="Name" name="name" />
        <Input placeholder="Email Address" name="email" />
        <Textarea className="h-36" placeholder="message" name="message" />
        <Button>Send Ask</Button>
      </form>
    </div>
  );
}
