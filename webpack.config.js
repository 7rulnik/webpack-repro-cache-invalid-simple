module.exports = {
    mode: 'production',
    target: 'node',
    cache: {
        name: `cache`,
        type: 'filesystem',
        cacheDirectory: `${__dirname}/.cache`,
        buildDependencies: {
          config: [__filename],
        },
      },
      infrastructureLogging: {
        debug: true
      }
}