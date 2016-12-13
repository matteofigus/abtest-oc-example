'use strict';

module.exports = function(anId){

	console.log('AB test mock for ' + anId);

	return {
		getVariant: function(experimentId){
			return experimentId === 'foo' ? 1 : 0;
		},
		trackGoal: function(goalName){
			console.log('ABTEST mock goal', goalName);
		}
	}
};