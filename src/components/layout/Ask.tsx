import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "../ui/card";

type DataProps = {
  data: (key: string) => string;
};

export default function Ask({ data }: DataProps) {
  return (
    <div className="space-y-10 w-full flex justify-center items-center h-full md:w-[750px] p-5">
      <Card className="w-full max-w-3xl lg:w-[768px] p-10">
        <h1 className="w-full text-center text-3xl font-semibold">QnA</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>{data("QnA.Question.1")}</AccordionTrigger>
            <AccordionContent className="text-start">
              {data("QnA.Answer.1")}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>{data("QnA.Question.2")}</AccordionTrigger>
            <AccordionContent>{data("QnA.Answer.2")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>{data("QnA.Question.3")}</AccordionTrigger>
            <AccordionContent>{data("QnA.Answer.3")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>{data("QnA.Question.4")}</AccordionTrigger>
            <AccordionContent>{data("QnA.Answer.4")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>{data("QnA.Question.5")}</AccordionTrigger>
            <AccordionContent>{data("QnA.Answer.5")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}
