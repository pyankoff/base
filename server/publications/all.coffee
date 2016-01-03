Meteor.publish 'all', () ->
	Collection.find {}
