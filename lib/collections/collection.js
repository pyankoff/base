Collection = new Meteor.Collection( 'collection' );

Collection.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Collection.deny({
  insert: () => false,
  update: () => false,
  remove: () => false
});
