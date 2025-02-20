const config = {
  branches: ['main', 'dev', 'test', 'dxkb.theseed'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['semantic-release/git', {
        'assets': ['dist/*.js', 'dist/**/*.js', 'dist/*.js.map', 'public/js/release/*.js', 'public/js/release/**/*.js', 'public/js/release/*.js.map', 'package.json'],
        'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    '@semantic-release/github'
  ]
};

module.exports = config;
