'use strict';

module.exports.data = function(context, callback){
  
	var ab = context.plugins.abTest('matteo');

 	callback(null, {
 		variant: ab.getVariant('foo')
 	});
};