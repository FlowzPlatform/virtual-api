const socket = io();
const client = feathers();

// Create the Feathers application with a `socketio` connection
client.configure(feathers.socketio(socket));

client.configure(feathers.hooks());

client.configure(feathers.authentication({
  storage: window.localStorage
}));

// Get the service for our `messages` endpoint
const product = client.service('virtual-product-master')

// insert into collection
product.create({
    "cultureSlugs" : "en_us",
    "oldVirtualProductId" : "553741f47a4d78950a8b460d",
    "personalized" : 1,
    "productId" : "1297679",
    "category" : [ 
        "9994"
    ],
    "sku" : "CU6377",
    "status" : true,
    "supplierMasterId" : "2"
}).then(() => {
	console.log("created");
});

// upudate collection
product.update('59145addbc568043da3416b6',{ 
	$set: {
		sku: "Rahul"
	}
}).then(() => {
	console.log("updated");
});

// upudate collection
product.patch(null,{ 
	query: { supplierMasterId: '2' },

	$set: {
		cultureSlugs: "en_us, en_ca"
	}
}).then(() => {
	console.log("updated multiple");
});


// remove by id
product.remove("59145addbc568043da3416b6").then(() => {
	console.log("removed");
});

// remove multiple by any field
product.remove(null, { query: { supplierMasterId: '3' } }).then(() => {
	console.log("removed multiple");
});

