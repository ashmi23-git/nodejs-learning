names=["ash", "puni", "malar"]
marks=[89, 88, 87]

// checking elements inside names
console.log(names);

// export one value
module.exports=names;

// export multiple values
module.exports={names, marks};

// export multiple values by assigning objects
module.exports = {
    name: names,
    mark: marks
}