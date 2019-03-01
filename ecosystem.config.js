module.exports = {
  apps: [{
    name: 'Timing Server',
    script: 'index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-216-180-39.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/id_rsa .pem',
      ref: 'origin/master',
      repo: 'https://github.com/SquishyRock/timingServer.git',
      path: '/home/ubuntu/timingServer',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
