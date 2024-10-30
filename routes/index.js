module.exports = app => {
    const PackageRouter = require("./package.routes");
    app.use('/api/packages', PackageRouter);
};

