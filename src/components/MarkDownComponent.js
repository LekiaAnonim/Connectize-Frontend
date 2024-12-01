import clsx from "clsx";
import DOMPurify from "dompurify";

export const MarkdownComponent = ({
  markdownContent = "",
  isDescription = false,
}) => {
  // Sanitize the Markdown content using DOMPurify
  const sanitizedDescriptionMarkdown = DOMPurify.sanitize(markdownContent);

  return (
    <div>
      <div
        className={clsx("prose", {
          "line-clamp-3": isDescription,
        })}
        dangerouslySetInnerHTML={{
          __html: sanitizedDescriptionMarkdown,
        }}
      />
      {isDescription && sanitizedDescriptionMarkdown.length >= 80 && (
        <button className="text-sm">see more</button>
      )}
    </div>
  );
};
