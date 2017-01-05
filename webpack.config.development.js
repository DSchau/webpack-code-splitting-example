const WebpackDashboard = require('webpack-dashboard/plugin');

module.exports = {
  devtool: '#cheap-eval-source-map',
  plugins: [
    new WebpackDashboard()
  ]
}