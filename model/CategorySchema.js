const mongoose=require('mongoose');
const CategorySchema
    = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
    },
    icon:{
        type:Object

    },
    availiableCountries:{
        type:Array,
    },

});
module.exports=mongoose.model('category',CategorySchema);