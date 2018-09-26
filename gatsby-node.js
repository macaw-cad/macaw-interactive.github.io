/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
    const config = getConfig()
  
    config.module.rules.push({
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader"
            }
        ]
    });
  
    // This will completely replace the webpack config with the modified object.
    actions.replaceWebpackConfig(config)
  }