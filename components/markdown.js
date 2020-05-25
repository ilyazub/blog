import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/code-block";
import markdownStyles from "@/components/markdown-styles.module.css"

export default function Markdown({ value }) {
  return (
    <ReactMarkdown
      className={markdownStyles['markdown']}
      source={value}
      renderers={{
        code: CodeBlock,
      }}
    />
  );
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
};
