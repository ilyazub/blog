import Markdown from "@/components/markdown";

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <Markdown value={content} />
    </div>
  );
}
