/**
 * Created by lenovo on 2017/6/19.
 */
module.exports = function( extract )
{
	extract = extract || require( 'extract-text-webpack-plugin' );

	let cssLoader = process.env.NODE_ENV === 'production' ?
		{loader: 'css-loader', options: { minimize: true }}
		:'css-loader';

		return {
			test: /\.scss$/i,
			use: extract.extract( {
				fallback:"style-loader",
				use: [ cssLoader, 'sass-loader' ]
			} )
		};
}
	;