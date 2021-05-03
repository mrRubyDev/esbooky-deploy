const mongoose = require("mongoose");
mongoose.connect(
	"mongodb://localhost:27017/esbookyDB",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	err => {
		if (err) console.log(err);
		console.log("DB Connection Established!!!!");
	}
);

module.exports = mongoose;
