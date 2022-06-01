/** @jsx jsx */
import {jsx} from 'theme-ui';
import './index.css';
import ReactDOM from 'react-dom';
import Deck from '@mdxp/core';
import theme from './theme';
import * as coreComponents from '@mdxp/components';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import Prism from 'prism-react-renderer/prism';
import MDXPresentation from './presentation.mdx';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-ruby');

const components = {
  ...coreComponents,
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    return (
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        theme={dracula}
        language={
          matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
        }
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    );
  }
}

ReactDOM.render(
  <Deck components={components} theme={theme}>
    <MDXPresentation />
  </Deck>,
  document.getElementById('root')
);
