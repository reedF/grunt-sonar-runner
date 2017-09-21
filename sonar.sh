#sonar version must >=5.6
echo ''
echo 'start sonar checking...'

npm install grunt-cli -g
#npm install grunt-sonar-runner grunt-contrib-jshint grunt-contrib-clean sonar-web-frontend-reporters --save-dev
#local have grunt-sonar-runner no need to install
npm install grunt-contrib-jshint grunt-contrib-clean sonar-web-frontend-reporters mocha grunt-mocha-test --save-dev
npm install
grunt clean
./node_modules/sonar-web-frontend-reporters/bin/sreporter -c ./.sreporterrc
echo 'init report done'
grunt sonar

echo ''
echo 'exit sonar checking.'

