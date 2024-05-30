db.listings.find({
    "host_location": { $regex: ".*Copenhagen.*", $options: 'i' },
    "location": {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [CityCenterLong, CityCenterLat]
            },
            $maxDistance: 15000
        }
    }
}).sort({ price: -1 }).limit(10);


db.listings.countDocuments({ "host_location": { $regex: ".*Copenhagen.*", $options: 'i' } });

db.listings.find({
    "host_location": { $regex: ".*Copenhagen.*", $options: 'i' },
    "capacity": { $gte: 50 },
    "type": { $regex: ".*recreation.*", $options: 'i' }
});


