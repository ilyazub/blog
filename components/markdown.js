import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/components/code-block'

export default function Markdown({ value }) {
  return (
    <ReactMarkdown
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
