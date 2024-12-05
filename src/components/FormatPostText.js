import LightParagraph from "./ParagraphText";

const FormatPostText = ({ text }) => {
  // Split the text into parts, keeping hashtags separate
  // Regex to detect spaces, #hashtags, ##large text, **bold**, and *italic*
  const parts = text
    .split(/(\s+|##?[^#\s]+|[*]{1,2}[^*]+[*]{1,2})/g)
    .map((part, index) => {
      if (part.startsWith("#")) {
        return (
          <span key={index} className="text-blue-400 font-semibold">
            {part}
          </span>
        );
      }
      if (part.startsWith("##")) {
        return (
          <h2 key={index} className="!text-bold !text-lg !text-black">
            {part}
          </h2>
        );
      }

      if (part.startsWith("**") && part.endsWith("**")) {
        const innerParts = part
          .slice(2, -2)
          .split(/(#[^#\s]+)/g)
          .map((innerPart, innerIndex) => {
            if (innerPart.startsWith("#")) {
              return (
                <span key={innerIndex} className="text-blue-400">
                  {innerPart}
                </span>
              );
            }
            return innerPart;
          });

        return (
          <strong key={index} className="!text-black">
            {innerParts}
          </strong>
        );
      }

      if (part.startsWith("*") && part.endsWith("*")) {
        // Handle single asterisk for emphasis

        const innerParts = part
          .slice(1, -1)
          .split(/(#[^#\s]+)/g)
          .map((innerPart, innerIndex) => {
            if (innerPart.startsWith("#")) {
              return (
                <span key={innerIndex} className="text-blue-400">
                  {innerPart}
                </span>
              );
            }
            return innerPart;
          });
        return (
          <em key={index}>
            {innerParts} {/* Remove * */}
          </em>
        );
      }

      return part;
    });

  return <LightParagraph>{parts}</LightParagraph>;
};

export default FormatPostText;
