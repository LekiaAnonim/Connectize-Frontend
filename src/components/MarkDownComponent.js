import clsx from "clsx";
import DOMPurify from "dompurify";
import ReusableModal from "./ResusableModal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const MarkdownComponent = ({
  markdownContent = "",
  markdownTitle = "",
  isDescription = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // Sanitize the Markdown content using DOMPurify
  const sanitizedDescriptionMarkdown = DOMPurify.sanitize(markdownContent);

  const tabletScreen = useMediaQuery({ maxWidth: "768px" });

  return (
    <section>
      <div
        className={clsx(
          "prose space-y-1",
          {
            "md:line-clamp-5": isDescription,
          },
          className
        )}
        dangerouslySetInnerHTML={{
          __html: sanitizedDescriptionMarkdown,
        }}
      />
      {isDescription && sanitizedDescriptionMarkdown.length >= 80 && (
        <button
          className="text-sm max-md:hidden"
          onClick={() => setIsOpen(true)}
        >
          see more
        </button>
      )}

      <ReusableModal
        isOpen={tabletScreen ? false : isOpen}
        size="4xl"
        onClose={() => setIsOpen(false)}
        title={markdownTitle}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizedDescriptionMarkdown,
          }}
        />
      </ReusableModal>
    </section>
  );
};
