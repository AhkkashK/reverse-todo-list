const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/tasks");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URL || "mongodb+srv://ahkkashkandasamy:uauU1Z7MtADAOgEL@cluster0.srmm0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Je viens de le modif ce code depuuis myfeature pour la 10003eme foissssssssss
