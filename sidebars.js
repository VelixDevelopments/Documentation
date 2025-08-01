/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Manual sidebar configuration for explicit ordering
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Imperat',
      link: {
        type: 'doc',
        id: 'Imperat/Introduction',
      },
      items: [
        {
          type: 'category',
          label: 'Basics',
          link: {
            type: 'doc',
            id: 'Imperat/basics/Command Creation',
          },
          items: [
            'Imperat/basics/Command Creation',
            'Imperat/basics/Subcommands',
            'Imperat/basics/Parameter-Type',
            'Imperat/basics/Annotations Deep Dive',
            'Imperat/basics/Dependency Injection',
            'Imperat/basics/Error-Handler',
            'Imperat/basics/Suggestion Resolver',
          ],
        },
        {
          type: 'category',
          label: 'Advanced',
          link: {
            type: 'doc',
            id: 'Imperat/advanced/Classic Commands',
          },
          items: [
            'Imperat/advanced/Classic Commands',
            'Imperat/advanced/Command Help',
            'Imperat/advanced/Processors',
            'Imperat/advanced/Source Resolver',
            'Imperat/advanced/Context Resolver',
            'Imperat/advanced/Customizing Imperat',
          ],
        },
        {
          type: 'category',
          label: 'Examples',
          link: {
            type: 'doc',
            id: 'Imperat/examples/examples-index',
          },
          items: [
            'Imperat/examples/examples-index',
            'Imperat/examples/GameModeCommand',
            'Imperat/examples/KillCommand',
            'Imperat/examples/Ranks',
          ],
        },
        {
          type: 'category',
          label: 'Extra',
          link: {
            type: 'doc',
            id: 'Imperat/extra/CommandTree',
          },
          items: [
            'Imperat/extra/CommandTree',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
