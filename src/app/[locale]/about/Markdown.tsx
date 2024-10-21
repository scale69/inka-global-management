"use client";
import { MdPreview } from "md-editor-rt";

export default function Markdown({ isi }: { isi: string }) {
  return <MdPreview modelValue={isi} />;
}
