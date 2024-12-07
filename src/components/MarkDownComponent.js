import clsx from "clsx";
import DOMPurify from "dompurify";

export const MarkdownComponent = ({
  markdownContent = "",
  isDescription = false,
  className
}) => {
  // Sanitize the Markdown content using DOMPurify
  const sanitizedDescriptionMarkdown = DOMPurify.sanitize(markdownContent);

  return (
    <div>
      <div
        className={clsx(
          "prose space-y-1",
          {
            "md:line-clamp-3": isDescription,
          },
          className
        )}
        dangerouslySetInnerHTML={{
          __html: sanitizedDescriptionMarkdown,
        }}
      />
      {isDescription && sanitizedDescriptionMarkdown.length >= 80 && (
        <button className="text-sm max-md:hidden">see more</button>
      )}
    </div>
  );
};
