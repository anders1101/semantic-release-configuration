'use strict';

const configuration = {
  branches: [ 'main' ],
  plugins: [
    [ '@semantic-release/commit-analyzer', {
      preset: 'angular',
      releaseRules: [
        { type: 'build', release: false, description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)' },
        { type: 'ci', release: false, description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Github Actions, BrowserStack, SauceLabs)' },
        { type: 'docs', release: false, description: 'Documentation only changes' },
        { type: 'feat', release: 'minor', description: 'A new feature' },
        { type: 'fix', release: 'patch', description: 'A bug fix' },
        { type: 'perf', release: 'patch', description: 'A code change that improves performance' },
        { type: 'refactor', release: false, description: 'A code change that neither fixes a bug nor adds a feature' },
        { type: 'style', release: false, description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)' },
        { type: 'test', release: false, description: 'Adding missing tests or correcting existing tests' }
      ],
      parserOpts: {
        noteKeywords: [ 'BREAKING CHANGE', 'BREAKING CHANGES' ]
      }
    }],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  /* eslint-disable no-template-curly-in-string */
  tagFormat: '${version}'
  /* eslint-enable no-template-curly-in-string */
};

module.exports = configuration;
