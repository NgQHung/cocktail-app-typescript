const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false,
        },
        url: `mongodb+srv://Hung_Cocktail_App:eHMsRzo9FbjyYCEz@cluster0.ysrvy.mongodb.net/?retryWrites=true&w=majority`,
    },
    server: {
        host: "localhost",
        port: 4000,
    },
};

export default config;
